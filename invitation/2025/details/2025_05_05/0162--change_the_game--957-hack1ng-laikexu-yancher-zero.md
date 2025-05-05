### Roster Details<br />
Team Name: Change The Game<br />
Roster: 957, Hack1ng, LaiKeXu, yancher, Zero<br />
Global Rank: [162](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_05_05.md)<br />
Regional Rank: [29]( ../../standings_asia_2025_05_05.md)<br />
<br />
Final Rank Value:  629.6<br />
<br />
Final Rank Value (629.6) = Starting Rank Value (600.7) + Head To Head Adjustments (29.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.213[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.213[<sup>2</sup>](#table1)

The average of these factors is 0.111<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 600.7
- 400 + ( ( 0.111 - 0.000 ) / ( 0.882 - 0.000 ) ) * 1600 = 600.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |       94 | 2025-04-27 | Chinggis Warriors | L   | 1.000      | -            | -                | -                | -         |    -2.56 | 957, Hack1ng, LaiKeXu, yancher, Zero |
|            7 |      135 | 2025-04-25 | Exusiai           | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.051 (0.007)    | 1 (1.000) |    12.14 | 957, Hack1ng, LaiKeXu, yancher, Zero |
|            6 |      205 | 2025-04-19 | Gods Reign        | W   | 1.000      | 0.143        | 0.011 (0.002)    | 0.438 (0.063)    | 1 (1.000) |    20.90 | 957, Hack1ng, LaiKeXu, yancher, Zero |
|            5 |      261 | 2025-04-17 | Just Swing        | L   | 1.000      | -            | -                | -                | -         |   -10.13 | 957, Hack1ng, LaiKeXu, yancher, Zero |
|            4 |     1605 | 2025-02-27 | DogEvil           | L   | 0.751      | -            | -                | -                | -         |   -10.23 | 957, Hack1ng, LaiKeXu, yancher, Zero |
|            3 |     1640 | 2025-02-25 | FengDa            | W   | 0.744      | 0.143        | 0.004 (0.000)    | 0.444 (0.047)    | 0 (0.000) |    15.76 | 957, Hack1ng, LaiKeXu, yancher, Zero |
|            2 |     1654 | 2025-02-25 | Shika             | L   | 0.739      | -            | -                | -                | -         |   -14.23 | 957, Hack1ng, LaiKeXu, yancher, Zero |
|            1 |     1673 | 2025-02-24 | NinJa             | W   | 0.733      | 0.143        | 0.001 (0.000)    | 0.417 (0.044)    | 0 (0.000) |    17.33 | 957, Hack1ng, LaiKeXu, yancher, Zero |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($360,998.53)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
