### Roster Details<br />
Team Name: Nexus<br />
Roster: Blytz, fNk, fnl, s0und, XELLOW<br />
Global Rank: [146](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_05_04.md)<br />
Regional Rank: [97]( ../../standings_europe_2026_05_04.md)<br />
<br />
Final Rank Value:  887.5<br />
<br />
Final Rank Value (887.5) = Starting Rank Value (943.0) + Head To Head Adjustments (-55.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.202[<sup>1</sup>](#table2)
- Bounty Collected: 0.314[<sup>2</sup>](#table1)
- Opponent Network: 0.092[<sup>2</sup>](#table1)
- LAN Wins: 0.562[<sup>2</sup>](#table1)

The average of these factors is 0.293<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 943.0
- 400 + ( ( 0.293 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 943.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           54 |     1414 | 2026-03-29 | Inner Circle       | L   | 0.960      | -            | -                | -                | -         |    -3.97 | Blytz, fNk, fnl, s0und, XELLOW |
|           53 |     1455 | 2026-03-29 | BASEMENT BOYS      | L   | 0.958      | -            | -                | -                | -         |   -18.98 | Blytz, fNk, fnl, s0und, XELLOW |
|           52 |     1702 | 2026-03-24 | aimclub            | L   | 0.927      | -            | -                | -                | -         |   -19.32 | Blytz, fNk, fnl, s0und, XELLOW |
|           51 |     1737 | 2026-03-24 | MOUZ NXT           | L   | 0.925      | -            | -                | -                | -         |    -6.43 | Blytz, fNk, fnl, s0und, XELLOW |
|           50 |     2248 | 2026-03-13 | GRINGOS            | W   | 0.855      | -            | -                | -                | 1 (0.855) |     1.27 | Blytz, fNk, fnl, s0und, XELLOW |
|           49 |     2249 | 2026-03-13 | BC.Game            | W   | 0.855      | 0.350        | 0.057 (0.017)    | 0.255 (0.076)    | 1 (0.855) |    22.21 | Blytz, fNk, fnl, s0und, XELLOW |
|           48 |     2252 | 2026-03-13 | OG                 | L   | 0.854      | -            | -                | -                | -         |    -5.83 | Blytz, fNk, fnl, s0und, XELLOW |
|           47 |     2264 | 2026-03-13 | Alliance           | W   | 0.854      | 0.350        | 0.082 (0.024)    | 0.964 (0.288)    | 1 (0.854) |    25.06 | Blytz, fNk, fnl, s0und, XELLOW |
|           46 |     3013 | 2026-02-26 | Betclic            | L   | 0.754      | -            | -                | -                | -         |    -3.30 | Blytz, fNk, fnl, s0und, XELLOW |
|           45 |     3038 | 2026-02-26 | FlyQuest           | L   | 0.752      | -            | -                | -                | -         |    -4.52 | Blytz, fNk, fnl, s0und, XELLOW |
|           44 |     3054 | 2026-02-26 | Fuzos              | L   | 0.751      | -            | -                | -                | -         |   -13.84 | Blytz, fNk, fnl, s0und, XELLOW |
|           43 |     3100 | 2026-02-24 | GenOne             | W   | 0.741      | 0.354        | 0.014 (0.004)    | 0.572 (0.150)    | 1 (0.741) |    13.27 | Blytz, fNk, fnl, s0und, XELLOW |
|           42 |     3126 | 2026-02-24 | Diamant            | W   | 0.739      | -            | -                | -                | 1 (0.739) |     1.82 | Blytz, fNk, fnl, s0und, XELLOW |
|           41 |     3143 | 2026-02-24 | mindshock          | W   | 0.738      | -            | -                | -                | 1 (0.738) |     1.33 | Blytz, fNk, fnl, s0und, XELLOW |
|           40 |     3241 | 2026-02-22 | Hashiras           | L   | 0.726      | -            | -                | -                | -         |   -14.72 | Blytz, fNk, fnl, s0und, XELLOW |
|           39 |     3553 | 2026-02-16 | ex-RUBY            | L   | 0.686      | -            | -                | -                | -         |    -7.61 | Blytz, fNk, fnl, s0und, XELLOW |
|           38 |     3611 | 2026-02-15 | Lazer Cats         | W   | 0.680      | 0.384        | 0.008 (0.002)    | 0.398 (0.104)    | -         |    11.29 | Blytz, fNk, fnl, s0und, XELLOW |
|           37 |     3648 | 2026-02-14 | Phantom            | L   | 0.674      | -            | -                | -                | -         |    -4.12 | Blytz, fNk, fnl, s0und, XELLOW |
|           36 |     3656 | 2026-02-14 | Nuclear TigeRES    | L   | 0.674      | -            | -                | -                | -         |    -2.58 | Blytz, fNk, fnl, s0und, XELLOW |
|           35 |     3756 | 2026-02-12 | Partizan           | W   | 0.661      | -            | -                | -                | -         |     1.11 | Blytz, fNk, fnl, s0und, XELLOW |
|           34 |     3761 | 2026-02-12 | ASTRAL             | L   | 0.661      | -            | -                | -                | -         |    -4.69 | Blytz, fNk, fnl, s0und, XELLOW |
|           33 |     3856 | 2026-02-10 | BIG EQUIPA         | W   | 0.646      | 0.435        | 0.030 (0.008)    | 0.116 (0.033)    | -         |     5.31 | Blytz, fNk, fnl, s0und, XELLOW |
|           32 |     3906 | 2026-02-08 | FAVBET             | L   | 0.633      | -            | -                | -                | -         |    -8.72 | Blytz, fNk, fnl, s0und, XELLOW |
|           31 |     3934 | 2026-02-07 | Omega              | W   | 0.625      | 0.384        | 0.021 (0.005)    | 0.616 (0.148)    | -         |    14.55 | Blytz, fNk, fnl, s0und, XELLOW |
|           30 |     3961 | 2026-02-06 | Bushido Wildcats   | W   | 0.620      | 0.384        | -                | 0.193 (0.046)    | -         |     5.17 | Blytz, fNk, fnl, s0und, XELLOW |
|           29 |     3997 | 2026-02-05 | home               | W   | 0.611      | 0.384        | -                | 0.099 (0.023)    | -         |     2.27 | Blytz, fNk, fnl, s0und, XELLOW |
|           28 |     4018 | 2026-02-04 | Bushido Wildcats   | L   | 0.606      | -            | -                | -                | -         |   -14.28 | Blytz, fNk, fnl, s0und, XELLOW |
|           27 |     4944 | 2025-12-18 | Lazer Cats         | L   | 0.288      | -            | -                | -                | -         |    -4.36 | Blytz, BTN, fnl, s0und, XELLOW |
|           26 |     4949 | 2025-12-18 | 9INE               | L   | 0.287      | -            | -                | -                | -         |    -1.02 | Blytz, BTN, fnl, s0und, XELLOW |
|           25 |     4966 | 2025-12-17 | SINQU              | W   | 0.280      | -            | -                | -                | 1 (0.280) |     1.05 | Blytz, BTN, fnl, s0und, XELLOW |
|           24 |     4974 | 2025-12-17 | zajezdzacze        | W   | 0.279      | 0.339        | -                | 0.296 (0.028)    | 1 (0.279) |     1.48 | Blytz, BTN, fnl, s0und, XELLOW |
|           23 |     4975 | 2025-12-17 | SINQU              | L   | 0.279      | -            | -                | -                | -         |    -7.79 | Blytz, BTN, fnl, s0und, XELLOW |
|           22 |     5042 | 2025-12-11 | magic              | L   | 0.238      | -            | -                | -                | -         |    -1.82 | Blytz, BTN, fnl, s0und, XELLOW |
|           21 |     5134 | 2025-12-06 | FORZE Reload       | L   | 0.205      | -            | -                | -                | -         |    -4.89 | Blytz, BTN, fnl, s0und, XELLOW |
|           20 |     5173 | 2025-12-04 | AMKAL              | W   | 0.194      | -            | -                | -                | -         |     0.72 | Blytz, BTN, fnl, s0und, XELLOW |
|           19 |     5179 | 2025-12-04 | Eternal Fire       | L   | 0.194      | -            | -                | -                | -         |    -5.30 | Blytz, BTN, fnl, s0und, XELLOW |
|           18 |     5187 | 2025-12-04 | ex-Fingers Crossed | L   | 0.192      | -            | -                | -                | -         |    -4.44 | Blytz, BTN, fnl, s0und, XELLOW |
|           17 |     5203 | 2025-12-03 | CYBERSHOKE         | L   | 0.185      | -            | -                | -                | -         |    -1.19 | Blytz, BTN, fnl, s0und, XELLOW |
|           16 |     5229 | 2025-12-01 | ARCRED             | L   | 0.174      | -            | -                | -                | -         |    -0.93 | Blytz, BTN, fnl, s0und, XELLOW |
|           15 |     5470 | 2025-11-22 | ENCE               | L   | 0.113      | -            | -                | -                | -         |    -1.79 | Blytz, BTN, fnl, s0und, XELLOW |
|           14 |     5479 | 2025-11-22 | Passion UA         | L   | 0.112      | -            | -                | -                | -         |    -0.32 | Blytz, BTN, fnl, s0und, XELLOW |
|           13 |     5489 | 2025-11-21 | ARCRED             | L   | 0.108      | -            | -                | -                | -         |    -0.56 | Blytz, BTN, fnl, s0und, XELLOW |
|           12 |     5500 | 2025-11-21 | Walczaki           | W   | 0.107      | 0.339        | 0.066 (0.002)    | 0.734 (0.027)    | 1 (0.107) |     2.52 | Blytz, BTN, fnl, s0und, XELLOW |
|           11 |     5529 | 2025-11-21 | ENCE               | W   | 0.104      | 0.339        | 0.011 (0.000)    | -                | 1 (0.104) |     1.63 | Blytz, BTN, fnl, s0und, XELLOW |
|           10 |     5543 | 2025-11-20 | G2 Ares            | W   | 0.101      | 0.339        | 0.003 (0.000)    | -                | -         |     1.80 | Blytz, BTN, fnl, s0und, XELLOW |
|            9 |     5559 | 2025-11-20 | STATE              | L   | 0.099      | -            | -                | -                | -         |    -0.73 | Blytz, BTN, fnl, s0und, XELLOW |
|            8 |     5572 | 2025-11-20 | INFINITE           | W   | 0.098      | -            | -                | -                | -         |     0.36 | Blytz, BTN, fnl, s0und, XELLOW |
|            7 |     5602 | 2025-11-17 | FORZE Reload       | L   | 0.080      | -            | -                | -                | -         |    -1.98 | Blytz, BTN, fnl, s0und, XELLOW |
|            6 |     5684 | 2025-11-13 | NOVAQ              | L   | 0.054      | -            | -                | -                | -         |    -0.75 | Blytz, BTN, fnl, s0und, XELLOW |
|            5 |     5713 | 2025-11-12 | AaB                | W   | 0.048      | -            | -                | -                | -         |     0.20 | Blytz, BTN, fnl, s0und, XELLOW |
|            4 |     5729 | 2025-11-12 | JiJieHao           | L   | 0.046      | -            | -                | -                | -         |    -0.28 | Blytz, BTN, fnl, s0und, XELLOW |
|            3 |     5761 | 2025-11-11 | 1win               | W   | 0.038      | 0.384        | 0.089 (0.001)    | -                | -         |     1.11 | Blytz, BTN, fnl, s0und, XELLOW |
|            2 |     5907 | 2025-11-07 | Nemiga             | L   | 0.013      | -            | -                | -                | -         |    -0.03 | Blytz, BTN, fnl, s0und, XELLOW |
|            1 |     6017 | 2025-11-05 | NOVAQ              | W   | 0.001      | -            | -                | -                | -         |     0.02 | Blytz, BTN, fnl, s0und, XELLOW |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($53.46)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-13 |      0.053 | $1,000.00      | $53.46          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
