### Roster Details<br />
Team Name: XI<br />
Roster: anber, Dengzoe, Few, Kragh, Scr0b<br />
Global Rank: [264](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [148]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  466.8<br />
<br />
Final Rank Value (466.8) = Starting Rank Value (494.3) + Head To Head Adjustments (-27.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.201[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.051<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 494.3
- 400 + ( ( 0.051 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 494.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      336 | 2025-03-24 | GhoulsW         | L   | 1.000      | -            | -                | -                | -         |   -13.47 | anber, Dengzoe, Few, Kragh, Scr0b |
|            6 |      345 | 2025-03-24 | Garden Garage   | W   | 1.000      | 0.143        | 0.007 (0.001)    | 0.270 (0.039)    | 0 (0.000) |    24.64 | anber, Dengzoe, Few, Kragh, Scr0b |
|            5 |      442 | 2025-03-17 | ESC             | L   | 1.000      | -            | -                | -                | -         |   -18.17 | anber, Dengzoe, Few, Kragh, Scr0b |
|            4 |      658 | 2025-03-08 | ex-Heimo        | L   | 1.000      | -            | -                | -                | -         |    -9.24 | anber, Dengzoe, Few, Kragh, Scr0b |
|            3 |      849 | 2025-03-04 | Chimera         | L   | 0.974      | -            | -                | -                | -         |    -5.51 | anber, Dengzoe, Few, Kragh, Scr0b |
|            2 |     2462 | 2024-11-14 | Denial          | L   | 0.241      | -            | -                | -                | -         |    -3.59 | anber, Dengzoe, Few, Kragh, Scr0b |
|            1 |     2468 | 2024-11-14 | Astralis Talent | L   | 0.240      | -            | -                | -                | -         |    -2.19 | anber, Dengzoe, Few, Kragh, Scr0b |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
