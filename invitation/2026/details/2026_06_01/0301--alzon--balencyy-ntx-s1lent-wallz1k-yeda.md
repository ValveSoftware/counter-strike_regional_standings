### Roster Details<br />
Team Name: ALZON<br />
Roster: balencyy, ntx, s1lent, wallz1k, yeda<br />
Global Rank: [301](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_06_01.md)<br />
Regional Rank: [74]( ../../standings_americas_2026_06_01.md)<br />
<br />
Final Rank Value:  552.1<br />
<br />
Final Rank Value (552.1) = Starting Rank Value (515.6) + Head To Head Adjustments (36.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.206[<sup>2</sup>](#table1)
- Opponent Network: 0.037[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.061<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 515.6
- 400 + ( ( 0.061 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 515.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      811 | 2026-05-07 | Imperial        | L   | 1.000      | -            | -                | -                | -         |    -0.82 | balencyy, ntx, s1lent, wallz1k, yeda     |
|           14 |      832 | 2026-05-06 | Players         | W   | 1.000      | 0.354        | 0.001 (0.000)    | 0.224 (0.079)    | 0 (0.000) |    21.12 | balencyy, ntx, s1lent, wallz1k, yeda     |
|           13 |      867 | 2026-05-04 | Crashers        | W   | 1.000      | 0.354        | 0.002 (0.001)    | 0.431 (0.153)    | 0 (0.000) |    22.45 | balencyy, ntx, pkN, s1lent, yeda         |
|           12 |      921 | 2026-05-02 | BESTIA Academy  | L   | 1.000      | -            | -                | -                | -         |    -8.05 | balencyy, ntx, pkN, s1lent, yeda         |
|           11 |     1053 | 2026-04-30 | GameHunters     | W   | 0.985      | 0.354        | 0.001 (0.001)    | 0.404 (0.141)    | 0 (0.000) |    26.05 | balencyy, ntx, s1lent, wallz1k, yeda     |
|           10 |     1130 | 2026-04-28 | Yawara          | L   | 0.973      | -            | -                | -                | -         |    -1.68 | balencyy, ntx, s1lent, wallz1k, yeda     |
|            9 |     1378 | 2026-04-23 | Crashers        | L   | 0.941      | -            | -                | -                | -         |    -5.52 | balencyy, ntx, s1lent, wallz1k, yeda     |
|            8 |     1410 | 2026-04-22 | Legacy          | L   | 0.937      | -            | -                | -                | -         |    -0.02 | balencyy, ntx, s1lent, wallz1k, yeda     |
|            7 |     3020 | 2026-03-18 | BESTIA Academy  | L   | 0.701      | -            | -                | -                | -         |    -4.58 | balencyy, ianzin, ntx, wallz1k, yeda     |
|            6 |     3069 | 2026-03-17 | Turma do Pagode | L   | 0.694      | -            | -                | -                | -         |    -0.41 | balencyy, ianzin, ntx, wallz1k, yeda     |
|            5 |     3947 | 2026-02-27 | Bad Luck        | L   | 0.573      | -            | -                | -                | -         |    -9.36 | balencyy, BUSAN, ianzin, wallz1k, yeda   |
|            4 |     4072 | 2026-02-25 | Curralzinho     | W   | 0.559      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.84 | balencyy, ianzin, ntx, wallz1k, yeda     |
|            3 |     4151 | 2026-02-23 | LP              | L   | 0.547      | -            | -                | -                | -         |    -0.41 | balencyy, ianzin, ntx, wallz1k, yeda     |
|            2 |     4179 | 2026-02-22 | Players         | L   | 0.542      | -            | -                | -                | -         |    -8.15 | balencyy, ianzin, ntx, wallz1k, yeda     |
|            1 |     5541 | 2026-01-17 | 9z              | L   | 0.301      | -            | -                | -                | -         |    -0.02 | balencyy, ianzin, Luk1nha, wallz1k, yeda |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
