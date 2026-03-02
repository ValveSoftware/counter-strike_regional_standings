### Roster Details<br />
Team Name: Money Crew<br />
Roster: N2o, obi, Zamgaa<br />
Global Rank: [289](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_03_02.md)<br />
Regional Rank: [39]( ../../standings_asia_2026_03_02.md)<br />
<br />
Final Rank Value:  519.4<br />
<br />
Final Rank Value (519.4) = Starting Rank Value (514.2) + Head To Head Adjustments (5.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.225[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.060<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 514.2
- 400 + ( ( 0.060 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 514.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |      409 | 2026-02-19 | FlyQuest RED | L   | 1.000      | -            | -                | -                | -         |    -9.88 | Marro, N2o, obi, Oczarka, Zamgaa |
|            8 |      453 | 2026-02-18 | regain       | W   | 1.000      | 0.363        | 0.007 (0.003)    | 0.318 (0.115)    | 0 (0.000) |    22.32 | Marro, N2o, obi, Oczarka, Zamgaa |
|            7 |      517 | 2026-02-17 | M80          | L   | 1.000      | -            | -                | -                | -         |    -0.31 | Marro, N2o, obi, Oczarka, Zamgaa |
|            6 |      692 | 2026-02-14 | BOSS         | L   | 1.000      | -            | -                | -                | -         |    -4.60 | AJ, Marro, N2o, obi, Oczarka     |
|            5 |     3300 | 2025-10-26 | Chicken Coop | L   | 0.356      | -            | -                | -                | -         |    -5.63 | N2o, obi, taggy, Zamgaa, zy      |
|            4 |     3418 | 2025-10-24 | BOSS         | L   | 0.342      | -            | -                | -                | -         |    -1.88 | N2o, obi, taggy, Zamgaa, zy      |
|            3 |     3536 | 2025-10-21 | Outfit 49    | W   | 0.323      | 0.333        | 0.010 (0.001)    | 0.426 (0.046)    | 0 (0.000) |     7.72 | Ethex, N2o, obi, taggy, Zamgaa   |
|            2 |     4154 | 2025-10-03 | Sakura       | L   | 0.203      | -            | -                | -                | -         |    -0.99 | brett, N2o, obi, Zamgaa, zy      |
|            1 |     4231 | 2025-10-01 | regain       | L   | 0.189      | -            | -                | -                | -         |    -1.59 | brett, N2o, obi, Zamgaa, zy      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
