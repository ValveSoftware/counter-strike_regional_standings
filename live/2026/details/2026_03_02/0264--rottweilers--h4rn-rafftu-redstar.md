### Roster Details<br />
Team Name: rottweilers<br />
Roster: h4rn, rafftu, REDSTAR<br />
Global Rank: [264](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_02.md)<br />
Regional Rank: [162]( ../../standings_europe_2026_03_02.md)<br />
<br />
Final Rank Value:  576.5<br />
<br />
Final Rank Value (576.5) = Starting Rank Value (542.5) + Head To Head Adjustments (34.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.276[<sup>2</sup>](#table1)
- Opponent Network: 0.025[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.075<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 542.5
- 400 + ( ( 0.075 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 542.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     1334 | 2026-01-24 | FORZE Reload     | L   | 0.955      | -            | -                | -                | -         |    -3.28 | h4rn, Libido, rafftu, REDSTAR, SHiPZ        |
|            5 |     1410 | 2026-01-23 | Bushido Wildcats | W   | 0.945      | 0.384        | 0.002 (0.001)    | 0.294 (0.107)    | 0 (0.000) |    23.37 | Dytor, h4rn, rafftu, REDSTAR, SHiPZ         |
|            4 |     1513 | 2026-01-20 | Pigeons          | W   | 0.925      | 0.384        | 0.066 (0.024)    | 0.399 (0.142)    | 0 (0.000) |    24.24 | Dytor, h4rn, rafftu, REDSTAR, SHiPZ         |
|            3 |     1528 | 2026-01-19 | kONO             | L   | 0.918      | -            | -                | -                | -         |    -4.79 | Dytor, h4rn, rafftu, REDSTAR, SHiPZ         |
|            2 |     1968 | 2025-12-17 | HYPERSPIRIT      | L   | 0.700      | -            | -                | -                | -         |    -4.66 | dennyslaw, Duplicate, h4rn, rafftu, REDSTAR |
|            1 |     1981 | 2025-12-17 | The Huns         | L   | 0.698      | -            | -                | -                | -         |    -0.85 | dennyslaw, Duplicate, h4rn, rafftu, REDSTAR |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
