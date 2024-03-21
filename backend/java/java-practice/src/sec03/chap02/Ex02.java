package sec03.chap02;

public class Ex02 {
    public static void main(String[] args) {
        //  float의 최대값과 최소값
        float fMin = -Float.MAX_VALUE;
        float fMax = Float.MAX_VALUE;

        //  double의 최대값과 최소값
        double dMin = -Double.MAX_VALUE;
        double dMax = Double.MAX_VALUE;

        //  최소 절대값
        float fAbsMin = Float.MIN_VALUE;
        double dAbsMin = Double.MIN_VALUE;

        // ⭐ double이 범위도 넓고, 정밀도도 높음 확인
        boolean bool1 = Float.MAX_VALUE < Double.MAX_VALUE;
        boolean bool2 = Float.MIN_VALUE > Double.MIN_VALUE;

        //  최대 정밀도 테스트
        double dblNum = 0.123456789123456789;
        float fltNum = 0.123456789123456789f;

        //double : float 보다 단순히 범위가 넓은 것이 아니라, 보다 정밀하게 표현 가능
    }
}
