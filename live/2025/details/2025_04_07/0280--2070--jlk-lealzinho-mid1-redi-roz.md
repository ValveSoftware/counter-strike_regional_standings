### Roster Details<br />
Team Name: 2070<br />
Roster: JLK, lealziNho, mid1, redi, roz<br />
Global Rank: [280](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_04_07.md)<br />
Regional Rank: [91]( ../../standings_americas_2025_04_07.md)<br />
<br />
Final Rank Value:  370.6<br />
<br />
Final Rank Value (370.6) = Starting Rank Value (402.4) + Head To Head Adjustments (-31.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.001<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 402.4
- 400 + ( ( 0.001 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 402.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      231 | 2025-03-28 | Yawara      | L   | 1.000      | -            | -                | -                | -         |    -7.98 | JLK, lealziNho, mid1, redi, roz        |
|            7 |      294 | 2025-03-27 | Fluxo       | L   | 1.000      | -            | -                | -                | -         |    -1.44 | JLK, lealziNho, mid1, redi, roz        |
|            6 |      674 | 2025-03-08 | América     | L   | 1.000      | -            | -                | -                | -         |   -15.44 | aNgelo, lealziNho, redi, roz, swarmyzz |
|            5 |      737 | 2025-03-07 | Dusty Roots | L   | 0.994      | -            | -                | -                | -         |    -4.44 | aNgelo, lealziNho, redi, roz, swarmyzz |
|            4 |      841 | 2025-03-04 | GameHunters | L   | 0.975      | -            | -                | -                | -         |    -7.50 | aNgelo, lealziNho, redi, roz, swarmyzz |
|            3 |      879 | 2025-03-02 | ShindeN     | L   | 0.963      | -            | -                | -                | -         |    -5.36 | aNgelo, lealziNho, redi, roz, swarmyzz |
|            2 |      936 | 2025-02-28 | VELOX       | W   | 0.948      | 0.371        | 0.000 (0.000)    | 0.147 (0.052)    | 0 (0.000) |    19.09 | aNgelo, lealziNho, redi, roz, swarmyzz |
|            1 |      950 | 2025-02-27 | Flamengo    | L   | 0.941      | -            | -                | -                | -         |    -8.75 | aNgelo, lealziNho, redi, roz, swarmyzz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
