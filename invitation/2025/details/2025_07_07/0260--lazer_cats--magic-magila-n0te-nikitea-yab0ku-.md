### Roster Details<br />
Team Name: Lazer Cats<br />
Roster: Magic, MAGILA, n0te, nikitea, yab0ku-<br />
Global Rank: [260](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [138]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  405.2<br />
<br />
Final Rank Value (405.2) = Starting Rank Value (400.4) + Head To Head Adjustments (4.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.4
- 400 + ( ( 0.000 - 0.000 ) / ( 0.858 - 0.000 ) ) * 1600 = 400.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     2217 | 2025-03-22 | TNL              | L   | 0.487      | -            | -                | -                | -         |    -0.21 | Magic, MAGILA, n0te, nikitea, yab0ku-     |
|            6 |     2227 | 2025-03-22 | Mousquetaires    | W   | 0.486      | 0.143        | 0.000 (0.000)    | 0.086 (0.006)    | 0 (0.000) |     9.91 | Magic, MAGILA, n0te, nikitea, yab0ku-     |
|            5 |     2380 | 2025-03-17 | RUBY             | L   | 0.453      | -            | -                | -                | -         |    -0.87 | Magic, MAGILA, monarrrh, nikitea, yab0ku- |
|            4 |     2423 | 2025-03-15 | Mercenaires      | L   | 0.439      | -            | -                | -                | -         |    -4.73 | Magic, MAGILA, monarrrh, nikitea, yab0ku- |
|            3 |     2657 | 2025-03-08 | Wildcard Academy | L   | 0.393      | -            | -                | -                | -         |    -4.36 | Magic, MAGILA, nikitea, Templ, yab0ku-    |
|            2 |     2786 | 2025-03-06 | RUBY             | L   | 0.380      | -            | -                | -                | -         |    -0.83 | Magic, MAGILA, nikitea, Templ, yab0ku-    |
|            1 |     2836 | 2025-03-04 | Virtual Cottage  | W   | 0.367      | 0.372        | 0.000 (0.000)    | 0.022 (0.003)    | 0 (0.000) |     5.87 | Magic, MAGILA, nikitea, Templ, yab0ku-    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($499,535.85)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
