### Roster Details<br />
Team Name: Lazer Cats<br />
Roster: Magic, MAGILA, n0te, nikitea, yab0ku-<br />
Global Rank: [259](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [147]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  486.5<br />
<br />
Final Rank Value (486.5) = Starting Rank Value (495.2) + Head To Head Adjustments (-8.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.198[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.052<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 495.2
- 400 + ( ( 0.052 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 495.2


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
|            9 |      371 | 2025-03-22 | TNL              | L   | 1.000      | -            | -                | -                | -         |    -8.65 | Magic, MAGILA, n0te, nikitea, yab0ku-     |
|            8 |      380 | 2025-03-22 | GenOne           | W   | 1.000      | 0.143        | 0.006 (0.001)    | 0.391 (0.056)    | 0 (0.000) |    24.25 | Magic, MAGILA, n0te, nikitea, yab0ku-     |
|            7 |      440 | 2025-03-17 | RUBY             | L   | 1.000      | -            | -                | -                | -         |    -4.29 | Magic, MAGILA, monarrrh, nikitea, yab0ku- |
|            6 |      476 | 2025-03-15 | Mercenaires      | L   | 1.000      | -            | -                | -                | -         |   -15.17 | Magic, MAGILA, monarrrh, nikitea, yab0ku- |
|            5 |      684 | 2025-03-08 | Wildcard Academy | L   | 1.000      | -            | -                | -                | -         |    -9.50 | Magic, MAGILA, nikitea, Templ, yab0ku-    |
|            4 |      799 | 2025-03-06 | RUBY             | L   | 0.987      | -            | -                | -                | -         |    -6.18 | Magic, MAGILA, nikitea, Templ, yab0ku-    |
|            3 |      843 | 2025-03-04 | Virtual Cottage  | W   | 0.975      | 0.372        | 0.000 (0.000)    | 0.093 (0.034)    | 0 (0.000) |    11.89 | Magic, MAGILA, nikitea, Templ, yab0ku-    |
|            2 |     2141 | 2024-11-30 | Nexus            | L   | 0.346      | -            | -                | -                | -         |    -0.56 | 7oX1C, Magic, nikitea, Templ, yab0ku-     |
|            1 |     2194 | 2024-11-27 | Partizan         | L   | 0.327      | -            | -                | -                | -         |    -0.49 | 7oX1C, Magic, nikitea, Templ, yab0ku-     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
