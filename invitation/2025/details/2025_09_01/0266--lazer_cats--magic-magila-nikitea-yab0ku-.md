### Roster Details<br />
Team Name: Lazer Cats<br />
Roster: Magic, MAGILA, nikitea, yab0ku-<br />
Global Rank: [266](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_09_01.md)<br />
Regional Rank: [138]( ../../standings_europe_2025_09_01.md)<br />
<br />
Final Rank Value:  400.6<br />
<br />
Final Rank Value (400.6) = Starting Rank Value (400.0) + Head To Head Adjustments (0.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.0
- 400 + ( ( 0.000 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 400.0


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
|            6 |     3434 | 2025-03-22 | TNL              | L   | 0.114      | -            | -                | -                | -         |    -0.07 | Magic, MAGILA, n0te, nikitea, yab0ku-     |
|            5 |     3444 | 2025-03-22 | GenOne           | W   | 0.113      | 0.624        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.79 | Magic, MAGILA, n0te, nikitea, yab0ku-     |
|            4 |     3597 | 2025-03-17 | RUBY             | L   | 0.080      | -            | -                | -                | -         |    -0.17 | Magic, MAGILA, monarrrh, nikitea, yab0ku- |
|            3 |     3640 | 2025-03-15 | Mercenaires      | L   | 0.066      | -            | -                | -                | -         |    -0.72 | Magic, MAGILA, monarrrh, nikitea, yab0ku- |
|            2 |     3874 | 2025-03-08 | Wildcard Academy | L   | 0.020      | -            | -                | -                | -         |    -0.23 | Magic, MAGILA, nikitea, Templ, yab0ku-    |
|            1 |     4003 | 2025-03-06 | RUBY             | L   | 0.007      | -            | -                | -                | -         |    -0.01 | Magic, MAGILA, nikitea, Templ, yab0ku-    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
