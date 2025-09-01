### Roster Details<br />
Team Name: EYEBALLERS<br />
Roster: delle, dex, HEAP, JW, poiii<br />
Global Rank: [268](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_09_01.md)<br />
Regional Rank: [140]( ../../standings_europe_2025_09_01.md)<br />
<br />
Final Rank Value:  396.2<br />
<br />
Final Rank Value (396.2) = Starting Rank Value (400.5) + Head To Head Adjustments (-4.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.5
- 400 + ( ( 0.000 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 400.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     2222 | 2025-05-04 | megoshort     | L   | 0.400      | -            | -                | -                | -         |    -6.29 | delle, dex, HEAP, JW, poiii |
|            6 |     2251 | 2025-05-03 | Johnny Speeds | L   | 0.393      | -            | -                | -                | -         |    -0.71 | delle, dex, HEAP, JW, poiii |
|            5 |     2679 | 2025-04-13 | Sashi         | L   | 0.259      | -            | -                | -                | -         |    -0.40 | delle, dex, HEAP, JW, poiii |
|            4 |     3401 | 2025-03-24 | GhoulsW       | L   | 0.126      | -            | -                | -                | -         |    -1.57 | delle, dex, HEAP, JW, poiii |
|            3 |     3427 | 2025-03-22 | TNL           | L   | 0.115      | -            | -                | -                | -         |    -0.07 | delle, dex, HEAP, JW, poiii |
|            2 |     3433 | 2025-03-22 | Hesta         | W   | 0.114      | 0.624        | 0.000 (0.000)    | 0.148 (0.010)    | 0 (0.000) |     2.39 | delle, dex, HEAP, JW, poiii |
|            1 |     3441 | 2025-03-22 | benched       | W   | 0.113      | 0.624        | 0.000 (0.000)    | 0.007 (0.001)    | 0 (0.000) |     2.35 | delle, dex, HEAP, JW, poiii |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
