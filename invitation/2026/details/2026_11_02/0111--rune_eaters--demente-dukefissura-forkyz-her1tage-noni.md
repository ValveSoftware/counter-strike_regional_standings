### Roster Details<br />
Team Name: Rune Eaters<br />
Roster: demente, dukefissura, forkyz, her1tage, noni<br />
Global Rank: [111](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_11_02.md)<br />
Regional Rank: [79]( ../../standings_europe_2026_11_02.md)<br />
<br />
Final Rank Value:  995.2<br />
<br />
Final Rank Value (995.2) = Starting Rank Value (1119.2) + Head To Head Adjustments (-124.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.402[<sup>1</sup>](#table2)
- Bounty Collected: 0.304[<sup>2</sup>](#table1)
- Opponent Network: 0.145[<sup>2</sup>](#table1)
- LAN Wins: 0.684[<sup>2</sup>](#table1)

The average of these factors is 0.384<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1119.2
- 400 + ( ( 0.384 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 1119.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           64 |      304 | 2026-10-22 | FORZE Reload     | L   | 1.000      | -            | -                | -                | -         |   -10.93 | forkyz, her1tage, noni, raiNyyy, shoxs       |
|           63 |      593 | 2026-10-16 | HYPERSPIRIT      | L   | 1.000      | -            | -                | -                | -         |   -22.14 | demente, dukefissura, forkyz, her1tage, noni |
|           62 |      668 | 2026-10-14 | PCIFIC           | L   | 1.000      | -            | -                | -                | -         |   -21.98 | demente, dukefissura, forkyz, her1tage, noni |
|           61 |      710 | 2026-10-13 | NT               | L   | 1.000      | -            | -                | -                | -         |   -13.00 | demente, dukefissura, forkyz, her1tage, noni |
|           60 |     1297 | 2026-09-30 | Bushido Wildcats | W   | 0.979      | 0.371        | 0.020 (0.007)    | 1.000 (0.363)    | 1 (0.979) |    12.14 | demente, dukefissura, forkyz, her1tage, noni |
|           59 |     1310 | 2026-09-30 | PAQT             | W   | 0.978      | -            | -                | -                | 1 (0.978) |     6.62 | demente, dukefissura, forkyz, her1tage, noni |
|           58 |     1347 | 2026-09-29 | DNK              | W   | 0.972      | -            | -                | -                | 1 (0.972) |     4.46 | demente, dukefissura, forkyz, her1tage, noni |
|           57 |     1355 | 2026-09-29 | ARCRED           | L   | 0.971      | -            | -                | -                | -         |   -24.54 | demente, dukefissura, forkyz, her1tage, noni |
|           56 |     1362 | 2026-09-29 | DNK              | W   | 0.971      | -            | -                | -                | 1 (0.971) |     3.62 | demente, dukefissura, forkyz, her1tage, noni |
|           55 |     1649 | 2026-09-24 | Nemesis          | L   | 0.938      | -            | -                | -                | -         |    -3.39 | demente, dukefissura, forkyz, her1tage, noni |
|           54 |     1793 | 2026-09-22 | Bushido Wildcats | L   | 0.925      | -            | -                | -                | -         |   -16.95 | demente, dukefissura, forkyz, her1tage, noni |
|           53 |     2040 | 2026-09-15 | ASTRAL           | W   | 0.880      | 0.384        | -                | 0.302 (0.102)    | -         |    14.54 | demente, dukefissura, forkyz, her1tage, noni |
|           52 |     2184 | 2026-09-12 | Omega            | L   | 0.858      | -            | -                | -                | -         |   -11.80 | demente, dukefissura, forkyz, her1tage, noni |
|           51 |     2577 | 2026-09-04 | 9INE             | L   | 0.806      | -            | -                | -                | -         |   -13.70 | demente, dukefissura, forkyz, her1tage, noni |
|           50 |     2611 | 2026-09-03 | 6yuBoJlbl        | W   | 0.800      | 0.435        | 0.026 (0.009)    | 0.225 (0.078)    | -         |     7.73 | demente, dukefissura, forkyz, her1tage, noni |
|           49 |     2871 | 2026-08-28 | G2 Ares          | W   | 0.761      | 0.435        | 0.009 (0.003)    | 0.715 (0.236)    | -         |    10.44 | demente, dukefissura, forkyz, her1tage, noni |
|           48 |     2886 | 2026-08-28 | 9INE             | W   | 0.760      | 0.435        | 0.008 (0.003)    | 0.289 (0.095)    | -         |    10.25 | demente, dukefissura, forkyz, her1tage, noni |
|           47 |     2892 | 2026-08-28 | Black Phoenix    | L   | 0.759      | -            | -                | -                | -         |    -9.57 | demente, dukefissura, forkyz, her1tage, noni |
|           46 |     2933 | 2026-08-27 | SPARTA           | L   | 0.753      | -            | -                | -                | -         |   -17.11 | demente, dukefissura, forkyz, her1tage, noni |
|           45 |     3063 | 2026-08-24 | Walczaki         | W   | 0.732      | 0.490        | 0.019 (0.007)    | 0.211 (0.076)    | -         |     5.25 | demente, dukefissura, forkyz, her1tage, noni |
|           44 |     3085 | 2026-08-23 | K27              | L   | 0.726      | -            | -                | -                | -         |    -2.86 | demente, dukefissura, forkyz, her1tage, noni |
|           43 |     3257 | 2026-08-16 | DNK              | W   | 0.680      | -            | -                | -                | 1 (0.680) |     2.29 | demente, forkyz, her1tage, kumao, noni       |
|           42 |     3579 | 2026-08-05 | Butterfly        | L   | 0.606      | -            | -                | -                | -         |   -13.04 | demente, forkyz, her1tage, kumao, noni       |
|           41 |     3688 | 2026-08-01 | SPARTA           | W   | 0.580      | 0.384        | -                | 0.522 (0.116)    | -         |     3.71 | demente, forkyz, her1tage, kumao, noni       |
|           40 |     3733 | 2026-07-31 | SINNERS          | L   | 0.572      | -            | -                | -                | -         |    -2.33 | demente, forkyz, her1tage, kumao, noni       |
|           39 |     3767 | 2026-07-30 | UNiTY            | W   | 0.566      | 0.384        | 0.019 (0.004)    | 0.683 (0.149)    | -         |     9.20 | demente, forkyz, her1tage, kumao, noni       |
|           38 |     3791 | 2026-07-29 | Atreides         | W   | 0.560      | -            | -                | -                | -         |     2.13 | demente, forkyz, her1tage, kumao, noni       |
|           37 |     3828 | 2026-07-28 | Illyrians        | W   | 0.552      | 0.384        | 0.019 (0.004)    | 0.749 (0.159)    | -         |     3.09 | demente, forkyz, her1tage, kumao, noni       |
|           36 |     3855 | 2026-07-27 | SAW Youngsters   | W   | 0.546      | -            | -                | -                | -         |     4.08 | demente, forkyz, her1tage, kumao, noni       |
|           35 |     3889 | 2026-07-26 | 6yuBoJlbl        | L   | 0.540      | -            | -                | -                | -         |   -11.90 | demente, forkyz, her1tage, kumao, noni       |
|           34 |     3909 | 2026-07-25 | ex-RUSTEC        | L   | 0.534      | -            | -                | -                | -         |   -12.96 | demente, forkyz, her1tage, kumao, noni       |
|           33 |     3931 | 2026-07-25 | Omega            | W   | 0.532      | 0.396        | 0.043 (0.009)    | 0.356 (0.075)    | 1 (0.532) |     9.65 | demente, forkyz, her1tage, kumao, noni       |
|           32 |     3940 | 2026-07-25 | DEPO             | W   | 0.531      | 0.396        | 0.013 (0.003)    | -                | 1 (0.531) |     5.76 | demente, forkyz, her1tage, kumao, noni       |
|           31 |     3946 | 2026-07-24 | ALTAY            | W   | 0.530      | -            | -                | -                | 1 (0.530) |     1.19 | demente, forkyz, her1tage, kumao, noni       |
|           30 |     4002 | 2026-07-23 | Entropy          | W   | 0.518      | -            | -                | -                | -         |     0.54 | demente, forkyz, her1tage, kumao, noni       |
|           29 |     4026 | 2026-07-22 | Black Phoenix    | L   | 0.512      | -            | -                | -                | -         |    -4.44 | demente, forkyz, her1tage, kumao, noni       |
|           28 |     4530 | 2026-06-26 | PCIFIC           | L   | 0.339      | -            | -                | -                | -         |    -6.84 | demente, forkyz, her1tage, kumao, noni       |
|           27 |     4540 | 2026-06-25 | 6yuBoJlbl        | W   | 0.333      | 0.324        | 0.026 (0.003)    | -                | 1 (0.333) |     2.74 | demente, forkyz, her1tage, kumao, noni       |
|           26 |     4550 | 2026-06-25 | Game Point       | W   | 0.332      | -            | -                | -                | 1 (0.332) |     0.35 | demente, forkyz, her1tage, kumao, noni       |
|           25 |     4554 | 2026-06-25 | 6yuBoJlbl        | L   | 0.331      | -            | -                | -                | -         |    -7.81 | demente, forkyz, her1tage, kumao, noni       |
|           24 |     5055 | 2026-05-31 | HOTU             | L   | 0.166      | -            | -                | -                | -         |    -0.48 | demente, forkyz, her1tage, kumao, noni       |
|           23 |     5061 | 2026-05-31 | Omega            | W   | 0.165      | -            | -                | -                | -         |     3.09 | demente, forkyz, her1tage, kumao, noni       |
|           22 |     5065 | 2026-05-31 | HOTU             | L   | 0.164      | -            | -                | -                | -         |    -0.47 | demente, forkyz, her1tage, kumao, noni       |
|           21 |     5105 | 2026-05-30 | Omega            | W   | 0.159      | -            | -                | -                | -         |     3.01 | demente, forkyz, her1tage, kumao, noni       |
|           20 |     5133 | 2026-05-29 | PCIFIC           | W   | 0.153      | -            | -                | -                | -         |     1.65 | demente, forkyz, her1tage, kumao, noni       |
|           19 |     5141 | 2026-05-29 | HOTU             | L   | 0.152      | -            | -                | -                | -         |    -0.43 | demente, forkyz, her1tage, kumao, noni       |
|           18 |     5149 | 2026-05-29 | RBLS             | L   | 0.152      | -            | -                | -                | -         |    -4.46 | demente, forkyz, her1tage, kumao, noni       |
|           17 |     5156 | 2026-05-29 | DNK              | W   | 0.151      | -            | -                | -                | -         |     0.16 | demente, forkyz, her1tage, kumao, noni       |
|           16 |     5241 | 2026-05-27 | Lavked           | L   | 0.138      | -            | -                | -                | -         |    -3.93 | demente, forkyz, her1tage, kumao, noni       |
|           15 |     5261 | 2026-05-26 | fnatic           | L   | 0.133      | -            | -                | -                | -         |    -0.48 | demente, forkyz, her1tage, kumao, noni       |
|           14 |     5271 | 2026-05-26 | Bebop            | L   | 0.132      | -            | -                | -                | -         |    -4.01 | demente, forkyz, her1tage, kumao, noni       |
|           13 |     5287 | 2026-05-25 | ex-RUBY          | L   | 0.127      | -            | -                | -                | -         |    -3.61 | demente, forkyz, her1tage, kumao, noni       |
|           12 |     5294 | 2026-05-25 | HEROIC Academy   | W   | 0.127      | -            | -                | -                | -         |     0.12 | demente, forkyz, her1tage, kumao, noni       |
|           11 |     5301 | 2026-05-25 | DragonClaw       | L   | 0.126      | -            | -                | -                | -         |    -3.63 | demente, forkyz, her1tage, kumao, noni       |
|           10 |     5323 | 2026-05-24 | Bebop            | W   | 0.121      | -            | -                | -                | -         |     0.13 | demente, forkyz, her1tage, kumao, noni       |
|            9 |     5382 | 2026-05-23 | EAC              | W   | 0.113      | -            | -                | -                | -         |     1.24 | demente, forkyz, her1tage, kumao, noni       |
|            8 |     5426 | 2026-05-22 | Just Players     | W   | 0.107      | -            | -                | -                | -         |     0.73 | demente, forkyz, her1tage, kumao, noni       |
|            7 |     5464 | 2026-05-21 | Bushido Wildcats | W   | 0.101      | -            | -                | -                | -         |     1.04 | demente, forkyz, her1tage, kumao, noni       |
|            6 |     5521 | 2026-05-20 | ex-RUBY          | L   | 0.093      | -            | -                | -                | -         |    -2.67 | demente, forkyz, her1tage, kumao, noni       |
|            5 |     5559 | 2026-05-19 | Eternal Fire     | L   | 0.085      | -            | -                | -                | -         |    -0.34 | demente, forkyz, her1tage, kumao, noni       |
|            4 |     5590 | 2026-05-17 | BRUTE            | L   | 0.074      | -            | -                | -                | -         |    -2.21 | demente, forkyz, her1tage, kumao, noni       |
|            3 |     5630 | 2026-05-16 | MASONIC          | W   | 0.065      | -            | -                | -                | -         |     0.18 | demente, forkyz, her1tage, kumao, noni       |
|            2 |     5712 | 2026-05-13 | aAa              | W   | 0.046      | -            | -                | -                | -         |     0.05 | demente, forkyz, her1tage, kumao, noni       |
|            1 |     5739 | 2026-05-12 | MASONIC          | L   | 0.041      | -            | -                | -                | -         |    -1.17 | demente, forkyz, her1tage, kumao, noni       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($17,932.58)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-09-30 |      0.979 | $8,000.00      | $7,833.70       |
| 2026-09-12 |      0.858 | $4,445.00      | $3,812.86       |
| 2026-08-16 |      0.680 | $3,240.00      | $2,202.28       |
| 2026-07-26 |      0.540 | $6,000.00      | $3,238.36       |
| 2026-06-26 |      0.339 | $1,023.00      | $347.13         |
| 2026-05-31 |      0.166 | $3,000.00      | $498.25         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
