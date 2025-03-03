### Roster Details<br />
Team Name: 8Sins<br />
Roster: Dutchy, moz, Prime, wfn, Wolfie<br />
Global Rank: [114](../../standings_global_2025_03_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_03.md)<br />
Regional Rank: [79]( ../../standings_europe_2025_03_03.md)<br />
<br />
Final Rank Value:  745.2<br />
<br />
Final Rank Value (745.2) = Starting Rank Value (751.0) + Head To Head Adjustments (-5.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.303[<sup>1</sup>](#table2)
- Bounty Collected: 0.248[<sup>2</sup>](#table1)
- Opponent Network: 0.020[<sup>2</sup>](#table1)
- LAN Wins: 0.158[<sup>2</sup>](#table1)

The average of these factors is 0.182<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 751.0
- 400 + ( ( 0.182 - 0.000 ) / ( 0.830 - 0.000 ) ) * 1600 = 751.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      107 | 2025-02-23 | ALASKA        | L   | 1.000      | -            | -                | -                | -         |   -10.88 | Dutchy, moz, Prime, wfn, Wolfie  |
|            4 |      121 | 2025-02-22 | ALASKA        | W   | 1.000      | 0.303        | 0.030 (0.009)    | 0.658 (0.200)    | 1 (1.000) |    20.68 | Dutchy, moz, Prime, wfn, Wolfie  |
|            3 |     1404 | 2024-11-20 | Belfast Storm | L   | 0.515      | -            | -                | -                | -         |   -10.65 | coldpera, f0cus, moz, Prime, wfn |
|            2 |     1945 | 2024-10-27 | VFE           | L   | 0.352      | -            | -                | -                | -         |    -7.24 | f0cus, Menace, moz, Prime, wfn   |
|            1 |     1951 | 2024-10-26 | Dripmen       | W   | 0.348      | 0.315        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.348) |     2.30 | f0cus, Menace, moz, Prime, wfn   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,656.75)
- Divide that value by the 5th highest value among all rosters ($333,212.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      1.000 | $1,326.00      | $1,326.00       |
| 2024-10-27 |      0.353 | $937.00        | $330.75         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
