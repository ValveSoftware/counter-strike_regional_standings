### Roster Details<br />
Team Name: Aurora Young Blud<br />
Roster: k1nco, kurosse, meetyoxanaji, r1pa4, redzed<br />
Global Rank: [336](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_11_02.md)<br />
Regional Rank: [224]( ../../standings_europe_2026_11_02.md)<br />
<br />
Final Rank Value:  499.5<br />
<br />
Final Rank Value (499.5) = Starting Rank Value (498.9) + Head To Head Adjustments (0.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.196[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.013[<sup>2</sup>](#table1)

The average of these factors is 0.053<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 498.9
- 400 + ( ( 0.053 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 498.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     5266 | 2026-05-26 | BET-M                | L   | 0.132      | -            | -                | -                | -         |    -0.27 | k1nco, kurosse, meetyoxanaji, r1pa4, redzed |
|            4 |     5274 | 2026-05-26 | ARCRED               | L   | 0.132      | -            | -                | -                | -         |    -1.14 | k1nco, kurosse, meetyoxanaji, r1pa4, redzed |
|            3 |     5280 | 2026-05-26 | BET-M                | W   | 0.131      | 0.396        | 0.015 (0.001)    | 0.465 (0.024)    | 1 (0.131) |     3.87 | k1nco, kurosse, meetyoxanaji, r1pa4, redzed |
|            2 |     5429 | 2026-05-22 | Butterfly            | L   | 0.107      | -            | -                | -                | -         |    -0.27 | k1nco, kurosse, meetyoxanaji, r1pa4, redzed |
|            1 |     5435 | 2026-05-22 | Spirit Academy Black | L   | 0.106      | -            | -                | -                | -         |    -1.65 | k1nco, kurosse, meetyoxanaji, r1pa4, redzed |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
