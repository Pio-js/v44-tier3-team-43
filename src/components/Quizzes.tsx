import { IQuiz } from "@/types/api";
import QuizCard from "@/components/QuizCard";
import QuizzesGrid from "@/components/QuizzesGrid";

const Quizzes = ({ quizzes }: { quizzes: IQuiz[] }) => (
	<QuizzesGrid>
		{quizzes.map((quiz) => (
			<QuizCard
				id={quiz.id}
				title={quiz.title}
				quizImage={quiz.image}
				userImage={quiz.User.image}
				userName={quiz.User.name}
				key={quiz.id}
			/>
		))}
	</QuizzesGrid>
);

export default Quizzes;
