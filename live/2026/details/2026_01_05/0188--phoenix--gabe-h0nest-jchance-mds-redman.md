### Roster Details<br />
Team Name: Phoenix<br />
Roster: Gabe, H0NeST, jchancE, mds, Redman<br />
Global Rank: [188](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_01_05.md)<br />
Regional Rank: [41]( ../../standings_americas_2026_01_05.md)<br />
<br />
Final Rank Value:  688.0<br />
<br />
Final Rank Value (688.0) = Starting Rank Value (714.4) + Head To Head Adjustments (-26.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.284[<sup>1</sup>](#table2)
- Bounty Collected: 0.282[<sup>2</sup>](#table1)
- Opponent Network: 0.054[<sup>2</sup>](#table1)
- LAN Wins: 0.014[<sup>2</sup>](#table1)

The average of these factors is 0.159<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 714.4
- 400 + ( ( 0.159 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 714.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           46 |      211 | 2025-12-15 | regain          | L   | 1.000      | -            | -                | -                | -         |   -13.81 | Gabe, H0NeST, jchancE, mds, Redman     |
|           45 |      277 | 2025-12-09 | Take Flyte      | W   | 1.000      | 0.333        | -                | 0.267 (0.089)    | 0 (0.000) |    11.94 | Gabe, H0NeST, jchancE, mds, Redman     |
|           44 |      295 | 2025-12-08 | Wanted Goons    | W   | 1.000      | 0.333        | -                | 0.141 (0.047)    | 0 (0.000) |     9.67 | Gabe, H0NeST, jchancE, mds, Redman     |
|           43 |      364 | 2025-12-05 | InControl       | L   | 0.996      | -            | -                | -                | -         |   -15.62 | Gabe, H0NeST, jchancE, mds, Redman     |
|           42 |      415 | 2025-12-03 | Ghost           | W   | 0.983      | 0.333        | 0.003 (0.001)    | 0.171 (0.056)    | 0 (0.000) |    13.43 | Gabe, H0NeST, jchancE, mds, Redman     |
|           41 |      854 | 2025-11-15 | Voca            | L   | 0.862      | -            | -                | -                | -         |    -4.46 | Gabe, H0NeST, jchancE, mds, Valter0k   |
|           40 |     1108 | 2025-11-07 | SportsBetExpert | L   | 0.809      | -            | -                | -                | -         |   -12.44 | Gabe, H0NeST, jchancE, mds, REKMEISTER |
|           39 |     1473 | 2025-10-27 | OverKnight      | L   | 0.737      | -            | -                | -                | -         |   -11.08 | Gabe, H0NeST, jchancE, mds, REKMEISTER |
|           38 |     1513 | 2025-10-26 | Marsborne       | L   | 0.730      | -            | -                | -                | -         |    -1.84 | Gabe, H0NeST, jchancE, mds, REKMEISTER |
|           37 |     1624 | 2025-10-24 | FlyQuest RED    | W   | 0.716      | 0.363        | 0.018 (0.005)    | 0.272 (0.071)    | 0 (0.000) |    13.60 | Gabe, H0NeST, jchancE, mds, REKMEISTER |
|           36 |     1689 | 2025-10-23 | InControl       | L   | 0.710      | -            | -                | -                | -         |   -12.33 | Gabe, H0NeST, jchancE, mds, REKMEISTER |
|           35 |     1756 | 2025-10-21 | Money Crew      | L   | 0.696      | -            | -                | -                | -         |   -14.13 | Gabe, H0NeST, jchancE, mds, REKMEISTER |
|           34 |     1852 | 2025-10-16 | LAG             | L   | 0.662      | -            | -                | -                | -         |   -10.42 | Gabe, H0NeST, jchancE, mds, REKMEISTER |
|           33 |     1924 | 2025-10-14 | BOSS            | L   | 0.650      | -            | -                | -                | -         |    -8.84 | Gabe, jchancE, mds, Redman, REKMEISTER |
|           32 |     1957 | 2025-10-13 | Zomblers        | W   | 0.643      | 0.333        | 0.001 (0.000)    | 0.232 (0.050)    | 0 (0.000) |     8.88 | Gabe, H0NeST, jchancE, mds, REKMEISTER |
|           31 |     2051 | 2025-10-09 | Take Flyte      | W   | 0.616      | 0.363        | -                | 0.267 (0.060)    | 0 (0.000) |     6.67 | Gabe, jchancE, mds, Redman, REKMEISTER |
|           30 |     2099 | 2025-10-08 | Wildcard        | L   | 0.609      | -            | -                | -                | -         |    -4.08 | Gabe, jchancE, mds, Redman, REKMEISTER |
|           29 |     2104 | 2025-10-08 | Voca            | L   | 0.609      | -            | -                | -                | -         |    -4.46 | Gabe, H0NeST, jchancE, mds, REKMEISTER |
|           28 |     2160 | 2025-10-07 | Zomblers        | W   | 0.602      | 0.333        | 0.001 (0.000)    | 0.232 (0.047)    | 0 (0.000) |     8.72 | Gabe, H0NeST, jchancE, mds, REKMEISTER |
|           27 |     2209 | 2025-10-06 | Sakura          | W   | 0.596      | 0.363        | 0.059 (0.013)    | 0.277 (0.060)    | 0 (0.000) |    12.95 | Gabe, jchancE, mds, Redman, REKMEISTER |
|           26 |     2215 | 2025-10-06 | InControl       | W   | 0.596      | 0.333        | 0.001 (0.000)    | 0.200 (0.040)    | -         |     9.23 | Gabe, H0NeST, jchancE, mds, REKMEISTER |
|           25 |     3222 | 2025-09-10 | NYX             | L   | 0.422      | -            | -                | -                | -         |   -10.39 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|           24 |     3274 | 2025-09-09 | Outfit 49       | L   | 0.416      | -            | -                | -                | -         |   -10.07 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|           23 |     3397 | 2025-09-06 | Marsborne       | L   | 0.394      | -            | -                | -                | -         |    -1.02 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|           22 |     3579 | 2025-08-28 | Marsborne       | L   | 0.336      | -            | -                | -                | -         |    -0.84 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|           21 |     3665 | 2025-08-24 | TSG             | W   | 0.309      | -            | -                | -                | -         |     2.54 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|           20 |     3680 | 2025-08-23 | Voca            | L   | 0.303      | -            | -                | -                | -         |    -2.20 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|           19 |     3711 | 2025-08-21 | OverKnight      | W   | 0.289      | 0.333        | -                | 0.266 (0.026)    | -         |     4.05 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|           18 |     3764 | 2025-08-19 | Marsborne       | L   | 0.276      | -            | -                | -                | -         |    -0.63 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|           17 |     3800 | 2025-08-17 | Aether          | W   | 0.262      | -            | -                | -                | -         |     1.98 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|           16 |     3871 | 2025-08-15 | BOSS            | L   | 0.249      | -            | -                | -                | -         |    -3.34 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|           15 |     3924 | 2025-08-14 | Mythic          | W   | 0.243      | 0.363        | 0.002 (0.000)    | -                | -         |     3.43 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|           14 |     3964 | 2025-08-13 | Sakura          | W   | 0.237      | 0.363        | 0.059 (0.005)    | -                | -         |     5.58 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|           13 |     4025 | 2025-08-12 | Wildcard        | L   | 0.229      | -            | -                | -                | -         |    -1.74 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|           12 |     4070 | 2025-08-11 | regain          | L   | 0.223      | -            | -                | -                | -         |    -3.63 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|           11 |     4084 | 2025-08-11 | Zomblers        | W   | 0.221      | 0.333        | 0.001 (0.000)    | -                | -         |     3.14 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|           10 |     4153 | 2025-08-09 | SkinRave        | L   | 0.209      | -            | -                | -                | -         |    -1.84 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|            9 |     4172 | 2025-08-08 | Sakura          | W   | 0.203      | 0.333        | 0.059 (0.004)    | -                | -         |     4.89 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|            8 |     4315 | 2025-07-29 | M80             | L   | 0.135      | -            | -                | -                | -         |    -0.06 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|            7 |     4391 | 2025-07-26 | Aether          | W   | 0.116      | -            | -                | -                | -         |     0.90 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|            6 |     4413 | 2025-07-25 | Arrival Seven   | W   | 0.108      | -            | -                | -                | -         |     0.84 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|            5 |     4490 | 2025-07-19 | M80             | L   | 0.067      | -            | -                | -                | -         |    -0.03 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|            4 |     4499 | 2025-07-19 | Zomblers        | W   | 0.067      | -            | -                | -                | 1 (0.067) |     0.45 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|            3 |     4513 | 2025-07-18 | Betclic         | L   | 0.063      | -            | -                | -                | -         |    -0.54 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|            2 |     4515 | 2025-07-18 | Zomblers        | W   | 0.063      | -            | -                | -                | 1 (0.063) |     0.90 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|            1 |     4680 | 2025-07-11 | Arrival Seven   | L   | 0.016      | -            | -                | -                | -         |    -0.39 | cbass, Gabe, Grave, jchancE, mds       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,280.13)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-08 |      0.609 | $2,000.00      | $1,217.85       |
| 2025-08-15 |      0.249 | $250.00        | $62.28          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
