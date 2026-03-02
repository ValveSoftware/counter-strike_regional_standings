### Roster Details<br />
Team Name: NEXVOID<br />
Roster: AccuracyTG, Diesen, erkaSt, OCEANA, Zesta<br />
Global Rank: [137](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_03_02.md)<br />
Regional Rank: [11]( ../../standings_asia_2026_03_02.md)<br />
<br />
Final Rank Value:  845.6<br />
<br />
Final Rank Value (845.6) = Starting Rank Value (825.5) + Head To Head Adjustments (20.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.308[<sup>1</sup>](#table2)
- Bounty Collected: 0.260[<sup>2</sup>](#table1)
- Opponent Network: 0.028[<sup>2</sup>](#table1)
- LAN Wins: 0.304[<sup>2</sup>](#table1)

The average of these factors is 0.225<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 825.5
- 400 + ( ( 0.225 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 825.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |       95 | 2026-02-26 | Chinggis Warriors | L   | 1.000      | -            | -                | -                | -         |   -17.66 | AccuracyTG, Diesen, erkaSt, OCEANA, Zesta |
|            4 |      152 | 2026-02-26 | BMZ               | L   | 1.000      | -            | -                | -                | -         |   -21.47 | AccuracyTG, Diesen, erkaSt, OCEANA, Zesta |
|            3 |     1002 | 2026-02-06 | The Huns          | W   | 1.000      | 0.284        | 0.022 (0.006)    | 0.425 (0.121)    | 1 (1.000) |    22.12 | AccuracyTG, Diesen, erkaSt, OCEANA, Zesta |
|            2 |     1027 | 2026-02-05 | The Huns          | W   | 1.000      | 0.284        | 0.022 (0.006)    | 0.425 (0.121)    | 1 (1.000) |    24.15 | AccuracyTG, Diesen, erkaSt, OCEANA, Zesta |
|            1 |     1033 | 2026-02-04 | BMZ               | W   | 1.000      | 0.284        | 0.006 (0.002)    | 0.137 (0.039)    | 1 (1.000) |    12.93 | AccuracyTG, Diesen, erkaSt, OCEANA, Zesta |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,875.00)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-28 |      1.000 | $225.00        | $225.00         |
| 2026-02-06 |      1.000 | $1,650.00      | $1,650.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
