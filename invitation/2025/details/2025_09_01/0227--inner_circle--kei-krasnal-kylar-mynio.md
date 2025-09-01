### Roster Details<br />
Team Name: Inner Circle<br />
Roster: KEi, kRaSnaL, Kylar, mynio<br />
Global Rank: [227](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_09_01.md)<br />
Regional Rank: [115]( ../../standings_europe_2025_09_01.md)<br />
<br />
Final Rank Value:  545.3<br />
<br />
Final Rank Value (545.3) = Starting Rank Value (545.1) + Head To Head Adjustments (0.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.283[<sup>2</sup>](#table1)
- Opponent Network: 0.019[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.076<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 545.1
- 400 + ( ( 0.076 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 545.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |       57 | 2025-08-29 | 9INE        | L   | 1.000      | -            | -                | -                | -         |    -1.17 | hades, KEi, kRaSnaL, Kylar, mynio |
|            5 |       71 | 2025-08-29 | HyperSpirit | L   | 1.000      | -            | -                | -                | -         |   -10.05 | hades, KEi, kRaSnaL, Kylar, mynio |
|            4 |      528 | 2025-08-10 | Sashi       | L   | 1.000      | -            | -                | -                | -         |    -1.98 | hades, KEi, kRaSnaL, Kylar, mynio |
|            3 |     1977 | 2025-05-13 | ENCE        | L   | 0.461      | -            | -                | -                | -         |    -0.26 | dycha, KEi, kRaSnaL, Kylar, mynio |
|            2 |     1998 | 2025-05-12 | 9INE        | L   | 0.455      | -            | -                | -                | -         |    -0.27 | dycha, KEi, kRaSnaL, Kylar, mynio |
|            1 |     2027 | 2025-05-11 | ENCE        | W   | 0.448      | 0.435        | 0.151 (0.029)    | 1.000 (0.195)    | 0 (0.000) |    13.88 | dycha, KEi, kRaSnaL, Kylar, mynio |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
