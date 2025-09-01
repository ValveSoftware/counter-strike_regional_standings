### Roster Details<br />
Team Name: Mythic<br />
Roster: Austin, Cooper, fl0m, hyza, Trucklover86<br />
Global Rank: [234](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_09_01.md)<br />
Regional Rank: [79]( ../../standings_americas_2025_09_01.md)<br />
<br />
Final Rank Value:  527.0<br />
<br />
Final Rank Value (527.0) = Starting Rank Value (524.3) + Head To Head Adjustments (2.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.233[<sup>2</sup>](#table1)
- Opponent Network: 0.026[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.065<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 524.3
- 400 + ( ( 0.065 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 524.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      345 | 2025-08-14 | Chicken Coop      | L   | 1.000      | -            | -                | -                | -         |    -5.95 | Cooper, fl0m, hyza, PwnAlone, Trucklover86 |
|           13 |      380 | 2025-08-13 | Getting Info      | W   | 1.000      | 0.363        | 0.008 (0.003)    | 0.492 (0.179)    | 0 (0.000) |    26.49 | Cooper, fl0m, hyza, PwnAlone, Trucklover86 |
|           12 |      466 | 2025-08-11 | Legacy Kingdom    | L   | 1.000      | -            | -                | -                | -         |   -10.44 | Austin, Cooper, fl0m, hyza, Trucklover86   |
|           11 |     1086 | 2025-07-11 | Outfit 49         | L   | 0.854      | -            | -                | -                | -         |   -15.40 | Cooper, fl0m, hyza, PwnAlone, Trucklover86 |
|           10 |     3063 | 2025-03-30 | Marsborne         | L   | 0.169      | -            | -                | -                | -         |    -0.68 | Austin, Cooper, fl0m, hyza, Trucklover86   |
|            9 |     3099 | 2025-03-29 | LAG               | W   | 0.163      | 0.769        | 0.015 (0.002)    | 0.542 (0.068)    | 0 (0.000) |     4.16 | Austin, Cooper, fl0m, hyza, Trucklover86   |
|            8 |     3105 | 2025-03-29 | Aether            | W   | 0.162      | 0.769        | 0.001 (0.000)    | 0.125 (0.016)    | 0 (0.000) |     3.41 | Austin, Cooper, fl0m, hyza, Trucklover86   |
|            7 |     3173 | 2025-03-28 | Northern Cossacks | W   | 0.156      | 0.769        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.63 | Austin, Cooper, fl0m, hyza, Trucklover86   |
|            6 |     3239 | 2025-03-27 | LAG               | L   | 0.149      | -            | -                | -                | -         |    -0.88 | Austin, Cooper, fl0m, hyza, Trucklover86   |
|            5 |     3834 | 2025-03-08 | BLUEJAYS          | L   | 0.022      | -            | -                | -                | -         |    -0.15 | Austin, Cooper, fl0m, hyza, Trucklover86   |
|            4 |     3908 | 2025-03-07 | NuTorious         | W   | 0.016      | 0.769        | 0.000 (0.000)    | 0.001 (0.000)    | 0 (0.000) |     0.21 | Austin, Cooper, fl0m, hyza, Trucklover86   |
|            3 |     3914 | 2025-03-07 | Aether            | W   | 0.015      | 0.769        | 0.000 (0.000)    | 0.205 (0.002)    | 0 (0.000) |     0.25 | Austin, Cooper, fl0m, hyza, Trucklover86   |
|            2 |     3996 | 2025-03-06 | MakersMeetYou     | W   | 0.008      | 0.769        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.08 | Austin, Cooper, fl0m, hyza, Trucklover86   |
|            1 |     4033 | 2025-03-05 | ASPYRE            | L   | 0.001      | -            | -                | -                | -         |    -0.01 | Austin, Cooper, fl0m, hyza, Trucklover86   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
