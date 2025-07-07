### Roster Details<br />
Team Name: Change The Game<br />
Roster: 957, Hack1ng, LaiKeXu, yancher, Zero<br />
Global Rank: [207](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_07_07.md)<br />
Regional Rank: [32]( ../../standings_asia_2025_07_07.md)<br />
<br />
Final Rank Value:  570.3<br />
<br />
Final Rank Value (570.3) = Starting Rank Value (567.0) + Head To Head Adjustments (3.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.202[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.153[<sup>2</sup>](#table1)

The average of these factors is 0.090<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 567.0
- 400 + ( ( 0.090 - 0.000 ) / ( 0.858 - 0.000 ) ) * 1600 = 567.0


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
|           10 |      798 | 2025-05-12 | E9                | L   | 0.825      | -            | -                | -                | -         |   -18.85 | 957, Hack1ng, LaiKeXu, yancher, Zero |
|            9 |      964 | 2025-05-06 | TYLOO             | L   | 0.786      | -            | -                | -                | -         |    -0.31 | 957, Hack1ng, LaiKeXu, yancher, Zero |
|            8 |     1182 | 2025-04-27 | Chinggis Warriors | L   | 0.724      | -            | -                | -                | -         |    -1.89 | 957, Hack1ng, LaiKeXu, yancher, Zero |
|            7 |     1232 | 2025-04-25 | Exusiai           | W   | 0.711      | 0.143        | 0.000 (0.000)    | 0.029 (0.003)    | 1 (0.711) |     9.79 | 957, Hack1ng, LaiKeXu, yancher, Zero |
|            6 |     1314 | 2025-04-19 | Gods Reign        | W   | 0.671      | 0.143        | 0.004 (0.000)    | 0.185 (0.018)    | 1 (0.671) |    13.83 | 957, Hack1ng, LaiKeXu, yancher, Zero |
|            5 |     1370 | 2025-04-17 | Just Swing        | L   | 0.658      | -            | -                | -                | -         |    -6.90 | 957, Hack1ng, LaiKeXu, yancher, Zero |
|            4 |     2968 | 2025-02-27 | Wings Up          | L   | 0.331      | -            | -                | -                | -         |    -2.46 | 957, Hack1ng, LaiKeXu, yancher, Zero |
|            3 |     3021 | 2025-02-25 | FengDa            | W   | 0.323      | 0.143        | 0.004 (0.000)    | 0.188 (0.009)    | 0 (0.000) |     6.92 | 957, Hack1ng, LaiKeXu, yancher, Zero |
|            2 |     3049 | 2025-02-25 | Shika             | L   | 0.319      | -            | -                | -                | -         |    -4.36 | 957, Hack1ng, LaiKeXu, yancher, Zero |
|            1 |     3073 | 2025-02-24 | NinJa             | W   | 0.313      | 0.143        | 0.013 (0.001)    | 0.190 (0.008)    | 0 (0.000) |     7.54 | 957, Hack1ng, LaiKeXu, yancher, Zero |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($499,535.85)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
