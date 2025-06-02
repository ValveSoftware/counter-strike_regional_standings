### Roster Details<br />
Team Name: Change The Game<br />
Roster: 957, Hack1ng, LaiKeXu, yancher, Zero<br />
Global Rank: [207](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_06_02.md)<br />
Regional Rank: [32]( ../../standings_asia_2025_06_02.md)<br />
<br />
Final Rank Value:  599.8<br />
<br />
Final Rank Value (599.8) = Starting Rank Value (592.5) + Head To Head Adjustments (7.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.216[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.195[<sup>2</sup>](#table1)

The average of these factors is 0.105<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 592.5
- 400 + ( ( 0.105 - 0.000 ) / ( 0.872 - 0.000 ) ) * 1600 = 592.5


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
|           10 |      338 | 2025-05-12 | E9                | L   | 1.000      | -            | -                | -                | -         |   -23.75 | 957, Hack1ng, LaiKeXu, yancher, Zero |
|            9 |      499 | 2025-05-06 | TYLOO             | L   | 1.000      | -            | -                | -                | -         |    -0.69 | 957, Hack1ng, LaiKeXu, yancher, Zero |
|            8 |      706 | 2025-04-27 | Chinggis Warriors | L   | 0.962      | -            | -                | -                | -         |    -2.34 | 957, Hack1ng, LaiKeXu, yancher, Zero |
|            7 |      756 | 2025-04-25 | Exusiai           | W   | 0.949      | 0.143        | 0.000 (0.000)    | 0.037 (0.005)    | 1 (0.949) |    12.29 | 957, Hack1ng, LaiKeXu, yancher, Zero |
|            6 |      838 | 2025-04-19 | Gods Reign        | W   | 0.909      | 0.143        | 0.006 (0.001)    | 0.274 (0.036)    | 1 (0.909) |    18.88 | 957, Hack1ng, LaiKeXu, yancher, Zero |
|            5 |      894 | 2025-04-17 | Just Swing        | L   | 0.896      | -            | -                | -                | -         |    -9.29 | 957, Hack1ng, LaiKeXu, yancher, Zero |
|            4 |     2492 | 2025-02-27 | DogEvil           | L   | 0.569      | -            | -                | -                | -         |    -5.33 | 957, Hack1ng, LaiKeXu, yancher, Zero |
|            3 |     2545 | 2025-02-25 | FengDa            | W   | 0.561      | 0.143        | 0.003 (0.000)    | 0.283 (0.023)    | 0 (0.000) |    11.86 | 957, Hack1ng, LaiKeXu, yancher, Zero |
|            2 |     2573 | 2025-02-25 | Shika             | L   | 0.557      | -            | -                | -                | -         |    -7.92 | 957, Hack1ng, LaiKeXu, yancher, Zero |
|            1 |     2597 | 2025-02-24 | NinJa             | W   | 0.551      | 0.143        | 0.017 (0.001)    | 0.276 (0.022)    | 0 (0.000) |    13.54 | 957, Hack1ng, LaiKeXu, yancher, Zero |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($444,744.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
