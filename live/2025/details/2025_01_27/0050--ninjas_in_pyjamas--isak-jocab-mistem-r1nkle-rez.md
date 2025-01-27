### Roster Details<br />
Team Name: Ninjas in Pyjamas<br />
Roster: isak, jocab, MisteM, r1nkle, REZ<br />
Global Rank: [50](../../standings_global_2025_01_27.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_27.md)<br />
Regional Rank: [36]( ../../standings_europe_2025_01_27.md)<br />
<br />
Final Rank Value:  1069.3<br />
<br />
Final Rank Value (1069.3) = Starting Rank Value (1063.4) + Head To Head Adjustments (5.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.470[<sup>1</sup>](#table2)
- Bounty Collected: 0.392[<sup>2</sup>](#table1)
- Opponent Network: 0.071[<sup>2</sup>](#table1)
- LAN Wins: 0.424[<sup>2</sup>](#table1)

The average of these factors is 0.339<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1063.4
- 400 + ( ( 0.339 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 1063.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           29 |      811 | 2024-11-24 | Spirit        | L   | 0.772      | -            | -                | -                | -         |    -0.20 | isak, jocab, MisteM, r1nkle, REZ |
|           28 |      818 | 2024-11-23 | 9 Pandas      | W   | 0.770      | 0.143        | 0.163 (0.018)    | 0.864 (0.095)    | 1 (0.770) |    15.91 | isak, jocab, MisteM, r1nkle, REZ |
|           27 |      844 | 2024-11-23 | TSM           | W   | 0.764      | 0.143        | 0.032 (0.003)    | 0.366 (0.040)    | 1 (0.764) |     6.23 | isak, jocab, MisteM, r1nkle, REZ |
|           26 |      876 | 2024-11-21 | Falcons       | L   | 0.757      | -            | -                | -                | -         |    -0.65 | isak, jocab, MisteM, r1nkle, REZ |
|           25 |      892 | 2024-11-21 | PARIVISION    | W   | 0.751      | 0.143        | 0.020 (0.002)    | 0.266 (0.029)    | 1 (0.751) |     6.87 | isak, jocab, MisteM, r1nkle, REZ |
|           24 |      904 | 2024-11-20 | G2            | L   | 0.750      | -            | -                | -                | -         |    -0.14 | isak, jocab, MisteM, r1nkle, REZ |
|           23 |     1104 | 2024-11-12 | BetBoom       | L   | 0.692      | -            | -                | -                | -         |    -8.31 | isak, jocab, MisteM, r1nkle, REZ |
|           22 |     1135 | 2024-11-11 | Zero Tenacity | W   | 0.687      | 0.384        | 0.081 (0.021)    | 0.719 (0.190)    | 0 (0.000) |    10.95 | isak, jocab, MisteM, r1nkle, REZ |
|           21 |     1175 | 2024-11-09 | Metizport     | L   | 0.674      | -            | -                | -                | -         |    -4.36 | isak, jocab, MisteM, r1nkle, REZ |
|           20 |     1196 | 2024-11-08 | Alliance      | W   | 0.667      | 0.432        | 0.037 (0.011)    | 0.375 (0.108)    | 1 (0.667) |     6.96 | isak, jocab, MisteM, r1nkle, REZ |
|           19 |     1475 | 2024-10-25 | Imperial      | L   | 0.573      | -            | -                | -                | -         |    -6.76 | isak, jocab, MisteM, r1nkle, REZ |
|           18 |     1503 | 2024-10-23 | Falcons       | L   | 0.561      | -            | -                | -                | -         |    -0.41 | isak, jocab, MisteM, r1nkle, REZ |
|           17 |     1505 | 2024-10-23 | Imperial      | W   | 0.560      | 0.477        | 0.161 (0.043)    | 0.411 (0.110)    | 0 (0.000) |    11.13 | isak, jocab, MisteM, r1nkle, REZ |
|           16 |     1650 | 2024-10-16 | JANO          | L   | 0.514      | -            | -                | -                | -         |   -12.72 | isak, jocab, MisteM, r1nkle, REZ |
|           15 |     1663 | 2024-10-16 | B8            | L   | 0.512      | -            | -                | -                | -         |    -6.05 | isak, jocab, MisteM, r1nkle, REZ |
|           14 |     1943 | 2024-10-04 | ECSTATIC      | L   | 0.431      | -            | -                | -                | -         |    -8.27 | isak, jocab, MisteM, r1nkle, REZ |
|           13 |     2830 | 2024-09-07 | Falcons       | L   | 0.253      | -            | -                | -                | -         |    -0.19 | alex, isak, maxster, r1nkle, REZ |
|           12 |     2881 | 2024-09-05 | FaZe          | L   | 0.241      | -            | -                | -                | -         |    -0.08 | alex, isak, maxster, r1nkle, REZ |
|           11 |     2930 | 2024-09-04 | Natus Vincere | L   | 0.234      | -            | -                | -                | -         |    -0.14 | alex, isak, maxster, r1nkle, REZ |
|           10 |     2964 | 2024-09-03 | Falcons       | W   | 0.227      | 0.889        | 0.872 (0.175)    | 0.627 (0.126)    | 1 (0.227) |     6.98 | alex, isak, maxster, r1nkle, REZ |
|            9 |     3071 | 2024-08-29 | Monte         | L   | 0.194      | -            | -                | -                | -         |    -3.34 | alex, isak, maxster, r1nkle, REZ |
|            8 |     3082 | 2024-08-29 | GUN5          | L   | 0.193      | -            | -                | -                | -         |    -2.98 | alex, isak, maxster, r1nkle, REZ |
|            7 |     3427 | 2024-08-21 | AMKAL         | L   | 0.141      | -            | -                | -                | -         |    -3.53 | alex, isak, maxster, r1nkle, REZ |
|            6 |     3527 | 2024-08-19 | Cloud9        | L   | 0.127      | -            | -                | -                | -         |    -2.21 | alex, isak, maxster, r1nkle, REZ |
|            5 |     3534 | 2024-08-19 | PARIVISION    | W   | 0.126      | 0.143        | 0.020 (0.000)    | 0.266 (0.005)    | 0 (0.000) |     0.92 | alex, isak, maxster, r1nkle, REZ |
|            4 |     3997 | 2024-08-04 | Astralis      | L   | 0.026      | -            | -                | -                | -         |    -0.19 | alex, isak, maxster, r1nkle, REZ |
|            3 |     4021 | 2024-08-03 | G2            | L   | 0.020      | -            | -                | -                | -         |    -0.00 | alex, isak, maxster, r1nkle, REZ |
|            2 |     4059 | 2024-08-02 | FaZe          | W   | 0.013      | 0.581        | 1.000 (0.008)    | 0.566 (0.004)    | 1 (0.013) |     0.41 | alex, isak, maxster, r1nkle, REZ |
|            1 |     4103 | 2024-08-01 | Cloud9        | W   | 0.006      | 0.581        | 0.070 (0.000)    | 0.318 (0.001)    | 1 (0.006) |     0.09 | alex, isak, maxster, r1nkle, REZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($15,169.50)
- Divide that value by the 5th highest value among all rosters ($204,341.08)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-12 |      0.693 | $1,500.00      | $1,039.63       |
| 2024-11-09 |      0.674 | $11,635.00     | $7,838.05       |
| 2024-10-20 |      0.540 | $5,000.00      | $2,701.89       |
| 2024-09-22 |      0.354 | $7,000.00      | $2,478.39       |
| 2024-08-25 |      0.167 | $5,000.00      | $836.26         |
| 2024-08-04 |      0.026 | $10,500.00     | $275.28         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
