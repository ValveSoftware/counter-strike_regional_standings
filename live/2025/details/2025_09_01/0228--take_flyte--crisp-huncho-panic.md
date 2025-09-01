### Roster Details<br />
Team Name: Take Flyte<br />
Roster: Crisp, huncho, Panic<br />
Global Rank: [228](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_09_01.md)<br />
Regional Rank: [77]( ../../standings_americas_2025_09_01.md)<br />
<br />
Final Rank Value:  543.6<br />
<br />
Final Rank Value (543.6) = Starting Rank Value (511.9) + Head To Head Adjustments (31.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.224[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.058<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 511.9
- 400 + ( ( 0.058 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 511.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      301 | 2025-08-15 | LAG        | L   | 1.000      | -            | -                | -                | -         |    -5.99 | Crisp, FxRE, HAMBOOGA, huncho, Panic      |
|            6 |      341 | 2025-08-14 | MIGHT      | W   | 1.000      | 0.363        | 0.000 (0.000)    | 0.224 (0.081)    | 0 (0.000) |    17.99 | Crisp, FxRE, HAMBOOGA, huncho, Panic      |
|            5 |      379 | 2025-08-13 | Akimbo     | W   | 1.000      | 0.363        | 0.009 (0.003)    | 0.050 (0.018)    | 0 (0.000) |    22.39 | Crisp, FxRE, HAMBOOGA, huncho, Panic      |
|            4 |      424 | 2025-08-12 | Marsborne  | L   | 1.000      | -            | -                | -                | -         |    -2.55 | Crisp, FxRE, HAMBOOGA, huncho, Panic      |
|            3 |     3923 | 2025-03-07 | Outfit 49  | L   | 0.015      | -            | -                | -                | -         |    -0.26 | Crisp, huncho, Panic, REKMEISTER, Sharpie |
|            2 |     3974 | 2025-03-06 | Passion UA | L   | 0.009      | -            | -                | -                | -         |    -0.01 | Crisp, huncho, Panic, REKMEISTER, Sharpie |
|            1 |     4025 | 2025-03-05 | Worms      | W   | 0.002      | 0.769        | 0.000 (0.000)    | 0.001 (0.000)    | 0 (0.000) |     0.04 | Crisp, huncho, Panic, REKMEISTER, Sharpie |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
