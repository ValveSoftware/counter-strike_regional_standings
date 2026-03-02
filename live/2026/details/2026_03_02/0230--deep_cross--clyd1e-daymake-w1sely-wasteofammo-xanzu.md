### Roster Details<br />
Team Name: Deep Cross<br />
Roster: clyd1e, DayMake, w1sely, WasteOfAmmo, xanzu<br />
Global Rank: [230](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_03_02.md)<br />
Regional Rank: [31]( ../../standings_asia_2026_03_02.md)<br />
<br />
Final Rank Value:  638.9<br />
<br />
Final Rank Value (638.9) = Starting Rank Value (665.4) + Head To Head Adjustments (-26.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.306[<sup>1</sup>](#table2)
- Bounty Collected: 0.166[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.089[<sup>2</sup>](#table1)

The average of these factors is 0.140<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 665.4
- 400 + ( ( 0.140 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 665.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      494 | 2026-02-18 | Arise          | L   | 1.000      | -            | -                | -                | -         |   -16.25 | clyd1e, DayMake, w1sely, WasteOfAmmo, xanzu |
|            4 |      556 | 2026-02-17 | BORING PLAYERS | L   | 1.000      | -            | -                | -                | -         |   -13.88 | clyd1e, DayMake, w1sely, WasteOfAmmo, xanzu |
|            3 |     2825 | 2025-11-09 | Nemesis SEA    | W   | 0.444      | 0.433        | 0.000 (0.000)    | 0.017 (0.003)    | 1 (0.444) |     4.33 | clyd1e, DayMake, w1sely, WasteOfAmmo, xanzu |
|            2 |     2938 | 2025-11-07 | Wicked         | W   | 0.433      | 0.433        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.433) |     4.01 | clyd1e, DayMake, w1sely, WasteOfAmmo, xanzu |
|            1 |     2986 | 2025-11-07 | Mousquetaires  | L   | 0.431      | -            | -                | -                | -         |    -4.80 | clyd1e, DayMake, w1sely, WasteOfAmmo, xanzu |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,782.50)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-09 |      0.446 | $4,000.00      | $1,782.50       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
