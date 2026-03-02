### Roster Details<br />
Team Name: Universe<br />
Roster: allu, HENU, Jelo<br />
Global Rank: [210](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_02.md)<br />
Regional Rank: [139]( ../../standings_europe_2026_03_02.md)<br />
<br />
Final Rank Value:  672.7<br />
<br />
Final Rank Value (672.7) = Starting Rank Value (681.4) + Head To Head Adjustments (-8.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.285[<sup>1</sup>](#table2)
- Bounty Collected: 0.209[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.091[<sup>2</sup>](#table1)

The average of these factors is 0.149<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 681.4
- 400 + ( ( 0.149 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 681.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     1747 | 2026-01-12 | CSDIILIT     | L   | 0.873      | -            | -                | -                | -         |   -12.04 | 1mackez, allu, HENU, Jelo, Julbord |
|            7 |     1752 | 2026-01-12 | illwill      | L   | 0.871      | -            | -                | -                | -         |    -0.41 | 1mackez, allu, HENU, Jelo, Julbord |
|            6 |     1771 | 2026-01-09 | STATE        | L   | 0.852      | -            | -                | -                | -         |    -3.25 | 1mackez, allu, HENU, Jelo, Julbord |
|            5 |     1785 | 2026-01-05 | Bebop        | L   | 0.825      | -            | -                | -                | -         |    -8.26 | 1mackez, allu, HENU, Jelo, Julbord |
|            4 |     3584 | 2025-10-18 | ENCE Academy | W   | 0.301      | 0.309        | 0.003 (0.000)    | 0.427 (0.040)    | 1 (0.301) |     6.19 | allu, HENU, Jelo, juho, xseveN     |
|            3 |     3590 | 2025-10-18 | HAVU         | W   | 0.300      | 0.309        | 0.012 (0.001)    | 0.531 (0.049)    | 1 (0.300) |     8.25 | allu, HENU, Jelo, juho, xseveN     |
|            2 |     3613 | 2025-10-17 | ENCE Academy | L   | 0.294      | -            | -                | -                | -         |    -3.18 | allu, HENU, Jelo, juho, xseveN     |
|            1 |     3617 | 2025-10-17 | CSDIILIT     | W   | 0.293      | 0.309        | 0.003 (0.000)    | 0.065 (0.006)    | 1 (0.293) |     4.03 | allu, HENU, Jelo, juho, xseveN     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,048.59)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-18 |      0.301 | $3,485.00      | $1,048.59       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
