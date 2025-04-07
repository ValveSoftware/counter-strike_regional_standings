### Roster Details<br />
Team Name: Norway<br />
Roster: Grus, sense, shyyne, SLY, Tapewaare<br />
Global Rank: [232](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [133]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  545.6<br />
<br />
Final Rank Value (545.6) = Starting Rank Value (534.0) + Head To Head Adjustments (11.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.211[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.077[<sup>2</sup>](#table1)

The average of these factors is 0.073<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 534.0
- 400 + ( ( 0.073 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 534.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     2438 | 2024-11-15 | PCIFIC    | W   | 0.246      | 0.617        | 0.001 (0.000)    | 0.133 (0.020)    | 1 (0.246) |     5.28 | Grus, sense, shyyne, SLY, Tapewaare |
|            4 |     2447 | 2024-11-15 | Metizport | L   | 0.245      | -            | -                | -                | -         |    -0.49 | Grus, sense, shyyne, SLY, Tapewaare |
|            3 |     2460 | 2024-11-14 | Canada    | W   | 0.241      | 0.617        | 0.000 (0.000)    | 0.013 (0.002)    | 1 (0.241) |     3.36 | Grus, sense, shyyne, SLY, Tapewaare |
|            2 |     2508 | 2024-11-13 | Mindfreak | W   | 0.233      | 0.617        | 0.011 (0.002)    | 0.073 (0.011)    | 1 (0.233) |     5.15 | Grus, sense, shyyne, SLY, Tapewaare |
|            1 |     2512 | 2024-11-13 | Sangal    | L   | 0.233      | -            | -                | -                | -         |    -1.72 | Grus, sense, shyyne, SLY, Tapewaare |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
