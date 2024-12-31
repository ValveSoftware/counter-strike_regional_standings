### Roster Details<br />
Team Name: Take Flyte<br />
Roster: cbass, Champ, Grave, jchancE, z0mb1e<br />
Global Rank: [155](../../standings_global_2024_12_31.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_12_31.md)<br />
Regional Rank: [40]( ../../standings_americas_2024_12_31.md)<br />
<br />
Final Rank Value:  713.4<br />
<br />
Final Rank Value (713.4) = Starting Rank Value (769.9) + Head To Head Adjustments (-56.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.278[<sup>1</sup>](#table2)
- Bounty Collected: 0.252[<sup>2</sup>](#table1)
- Opponent Network: 0.025[<sup>2</sup>](#table1)
- LAN Wins: 0.204[<sup>2</sup>](#table1)

The average of these factors is 0.190<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 769.9
- 400 + ( ( 0.190 - 0.000 ) / ( 0.821 - 0.000 ) ) * 1600 = 769.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           47 |      109 | 2024-12-15 | Alter Iron       | L   | 1.000      | -            | -                | -                | -         |   -14.98 | cbass, Champ, Grave, jchancE, z0mb1e |
|           46 |      132 | 2024-12-14 | Undone           | L   | 1.000      | -            | -                | -                | -         |   -11.04 | cbass, Champ, Grave, jchancE, z0mb1e |
|           45 |      161 | 2024-12-13 | LAG              | W   | 1.000      | 0.143        | 0.004 (0.001)    | 0.119 (0.017)    | 0 (0.000) |    10.62 | cbass, Champ, Grave, jchancE, z0mb1e |
|           44 |      181 | 2024-12-12 | Wanted Goons     | W   | 1.000      | 0.143        | 0.011 (0.002)    | 0.043 (0.006)    | 0 (0.000) |    11.87 | cbass, Champ, Grave, jchancE, z0mb1e |
|           43 |      196 | 2024-12-11 | Undone           | L   | 1.000      | -            | -                | -                | -         |   -11.49 | cbass, Champ, Grave, jchancE, z0mb1e |
|           42 |      208 | 2024-12-10 | Wanted Goons     | W   | 1.000      | 0.143        | 0.011 (0.002)    | 0.043 (0.006)    | 0 (0.000) |    12.40 | cbass, Champ, Grave, jchancE, z0mb1e |
|           41 |      257 | 2024-12-07 | FLUFFY AIMERS    | L   | 1.000      | -            | -                | -                | -         |    -9.28 | cbass, Champ, Grave, jchancE, z0mb1e |
|           40 |      262 | 2024-12-07 | Sharks           | L   | 1.000      | -            | -                | -                | -         |    -3.00 | cbass, Champ, Grave, jchancE, z0mb1e |
|           39 |      292 | 2024-12-06 | Not Mythic       | W   | 1.000      | 0.384        | 0.000 (0.000)    | -                | 1 (1.000) |     4.32 | cbass, Champ, Grave, jchancE, z0mb1e |
|           38 |     1480 | 2024-10-09 | LAG              | L   | 0.662      | -            | -                | -                | -         |   -13.91 | cbass, Champ, Grave, jchancE, z0mb1e |
|           37 |     1485 | 2024-10-09 | LAG              | W   | 0.662      | 0.477        | 0.004 (0.001)    | 0.119 (0.038)    | 0 (0.000) |     6.95 | cbass, Champ, Grave, jchancE, z0mb1e |
|           36 |     1518 | 2024-10-08 | E-Xolos LAZER    | L   | 0.655      | -            | -                | -                | -         |    -9.64 | cbass, Champ, Grave, jchancE, z0mb1e |
|           35 |     1525 | 2024-10-08 | E-Xolos LAZER    | L   | 0.655      | -            | -                | -                | -         |   -10.22 | cbass, Champ, Grave, jchancE, z0mb1e |
|           34 |     1678 | 2024-10-03 | Mythic           | W   | 0.622      | 0.477        | 0.000 (0.000)    | 0.122 (0.036)    | 0 (0.000) |     5.65 | cbass, Champ, Grave, jchancE, z0mb1e |
|           33 |     1685 | 2024-10-03 | Mythic           | W   | 0.622      | 0.477        | -                | 0.122 (0.036)    | 0 (0.000) |     5.91 | cbass, Champ, Grave, jchancE, z0mb1e |
|           32 |     1757 | 2024-10-01 | vagrants         | L   | 0.609      | -            | -                | -                | -         |   -10.20 | cbass, Champ, Grave, jchancE, z0mb1e |
|           31 |     1762 | 2024-10-01 | vagrants         | W   | 0.608      | 0.477        | 0.004 (0.001)    | 0.187 (0.054)    | 0 (0.000) |     9.14 | cbass, Champ, Grave, jchancE, z0mb1e |
|           30 |     1853 | 2024-09-28 | M80              | L   | 0.589      | -            | -                | -                | -         |    -1.13 | cbass, Grave, jchancE, serv0, z0mb1e |
|           29 |     1854 | 2024-09-28 | M80              | L   | 0.588      | -            | -                | -                | -         |    -1.15 | cbass, Champ, Grave, jchancE, z0mb1e |
|           28 |     1985 | 2024-09-25 | Legacy           | L   | 0.569      | -            | -                | -                | -         |    -2.84 | cbass, Champ, Grave, jchancE, z0mb1e |
|           27 |     1990 | 2024-09-25 | Legacy           | L   | 0.568      | -            | -                | -                | -         |    -2.92 | cbass, Champ, Grave, jchancE, z0mb1e |
|           26 |     2229 | 2024-09-18 | NRG              | L   | 0.522      | -            | -                | -                | -         |    -1.36 | cbass, Champ, Grave, jchancE, z0mb1e |
|           25 |     2232 | 2024-09-18 | NRG              | L   | 0.522      | -            | -                | -                | -         |    -1.38 | cbass, Champ, Grave, jchancE, z0mb1e |
|           24 |     2520 | 2024-09-08 | timbermen        | L   | 0.455      | -            | -                | -                | -         |    -4.51 | cbass, Grave, jchancE, serv0, z0mb1e |
|           23 |     2538 | 2024-09-07 | Wanted Goons     | W   | 0.449      | -            | -                | -                | 1 (0.449) |     3.27 | cbass, Grave, jchancE, serv0, z0mb1e |
|           22 |     2553 | 2024-09-07 | Amped Red        | W   | 0.447      | -            | -                | -                | 1 (0.447) |     1.73 | cbass, Grave, jchancE, serv0, z0mb1e |
|           21 |     2644 | 2024-09-04 | FLUFFY AIMERS    | L   | 0.429      | -            | -                | -                | -         |    -3.98 | cbass, Grave, jchancE, serv0, z0mb1e |
|           20 |     2648 | 2024-09-04 | FLUFFY AIMERS    | L   | 0.428      | -            | -                | -                | -         |    -4.11 | cbass, Grave, jchancE, serv0, z0mb1e |
|           19 |     2906 | 2024-08-27 | Legacy           | L   | 0.375      | -            | -                | -                | -         |    -2.84 | cbass, Grave, jchancE, serv0, z0mb1e |
|           18 |     2957 | 2024-08-26 | LAG              | W   | 0.369      | 0.143        | 0.004 (0.000)    | 0.119 (0.006)    | -         |     4.37 | cbass, Champ, jchancE, serv0, z0mb1e |
|           17 |     3586 | 2024-08-07 | timbermen        | L   | 0.242      | -            | -                | -                | -         |    -2.55 | cbass, Grave, jchancE, serv0, z0mb1e |
|           16 |     3588 | 2024-08-07 | timbermen        | L   | 0.242      | -            | -                | -                | -         |    -2.60 | cbass, Grave, jchancE, serv0, z0mb1e |
|           15 |     3640 | 2024-08-06 | BOSS             | W   | 0.235      | 0.477        | 0.038 (0.004)    | 0.444 (0.050)    | -         |     6.37 | cbass, Grave, jchancE, serv0, z0mb1e |
|           14 |     3644 | 2024-08-06 | BOSS             | L   | 0.235      | -            | -                | -                | -         |    -1.05 | cbass, Grave, jchancE, serv0, z0mb1e |
|           13 |     3702 | 2024-08-04 | Final Form       | L   | 0.223      | -            | -                | -                | -         |    -4.78 | cbass, Grave, jchancE, serv0, z0mb1e |
|           12 |     3741 | 2024-08-03 | Wildcard         | L   | 0.215      | -            | -                | -                | -         |    -0.33 | cbass, Champ, jchancE, serv0, z0mb1e |
|           11 |     3844 | 2024-07-31 | Revenge Nation   | L   | 0.195      | -            | -                | -                | -         |    -3.61 | cbass, Grave, jchancE, serv0, z0mb1e |
|           10 |     3849 | 2024-07-31 | Revenge Nation   | L   | 0.195      | -            | -                | -                | -         |    -3.66 | cbass, Grave, jchancE, serv0, z0mb1e |
|            9 |     4091 | 2024-07-24 | InControl        | W   | 0.149      | 0.371        | 0.006 (0.000)    | 0.076 (0.004)    | -         |     1.61 | cbass, Grave, jchancE, serv0, z0mb1e |
|            8 |     4288 | 2024-07-18 | Wildcard         | L   | 0.109      | -            | -                | -                | -         |    -0.18 | cbass, Grave, jchancE, serv0, z0mb1e |
|            7 |     4293 | 2024-07-18 | Wildcard         | L   | 0.108      | -            | -                | -                | -         |    -0.18 | cbass, Grave, jchancE, serv0, z0mb1e |
|            6 |     4350 | 2024-07-17 | Party Astronauts | L   | 0.102      | -            | -                | -                | -         |    -1.01 | cbass, Grave, jchancE, serv0, z0mb1e |
|            5 |     4354 | 2024-07-17 | Party Astronauts | L   | 0.102      | -            | -                | -                | -         |    -1.02 | cbass, Grave, jchancE, serv0, z0mb1e |
|            4 |     4415 | 2024-07-16 | USA              | W   | 0.095      | -            | -                | -                | -         |     0.52 | cbass, Grave, jchancE, serv0, z0mb1e |
|            3 |     4421 | 2024-07-16 | USA              | W   | 0.095      | -            | -                | -                | -         |     0.52 | cbass, Grave, jchancE, serv0, z0mb1e |
|            2 |     4468 | 2024-07-15 | Nouns            | L   | 0.089      | -            | -                | -                | -         |    -0.37 | cbass, Grave, jchancE, serv0, z0mb1e |
|            1 |     4473 | 2024-07-15 | Nouns            | L   | 0.088      | -            | -                | -                | -         |    -0.37 | cbass, Grave, jchancE, serv0, z0mb1e |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($749.57)
- Divide that value by the 5th highest value among all rosters ($298,653.52)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.735 | $400.00        | $294.02         |
| 2024-09-08 |      0.456 | $1,000.00      | $455.55         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
