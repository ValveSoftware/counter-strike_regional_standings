### Roster Details<br />
Team Name: Bushido Wildcats<br />
Roster: cadnyx, Darendeli, eNs, scolleN, Vej<br />
Global Rank: [134](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_01_05.md)<br />
Regional Rank: [92]( ../../standings_europe_2026_01_05.md)<br />
<br />
Final Rank Value:  842.2<br />
<br />
Final Rank Value (842.2) = Starting Rank Value (807.3) + Head To Head Adjustments (34.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.273[<sup>1</sup>](#table2)
- Bounty Collected: 0.285[<sup>2</sup>](#table1)
- Opponent Network: 0.067[<sup>2</sup>](#table1)
- LAN Wins: 0.196[<sup>2</sup>](#table1)

The average of these factors is 0.205<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 807.3
- 400 + ( ( 0.205 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 807.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      594 | 2025-11-25 | CYBERSHOKE | L   | 0.928      | -            | -                | -                | -         |    -3.19 | cadnyx, Darendeli, eNs, scolleN, Vej |
|            5 |      605 | 2025-11-25 | RUBY       | W   | 0.926      | 0.371        | 0.046 (0.016)    | 0.962 (0.330)    | 1 (0.926) |    21.92 | cadnyx, Darendeli, eNs, scolleN, Vej |
|            4 |      626 | 2025-11-24 | GUN5       | L   | 0.921      | -            | -                | -                | -         |    -2.59 | cadnyx, Darendeli, eNs, scolleN, Vej |
|            3 |      634 | 2025-11-24 | RUBY       | W   | 0.920      | 0.371        | 0.046 (0.016)    | 0.962 (0.328)    | 1 (0.920) |    22.64 | cadnyx, Darendeli, eNs, scolleN, Vej |
|            2 |     1121 | 2025-11-07 | Fire Flux  | L   | 0.808      | -            | -                | -                | -         |    -8.26 | cadnyx, Darendeli, eNs, scolleN, Vej |
|            1 |     1370 | 2025-11-01 | MANA       | W   | 0.766      | 0.278        | 0.000 (0.000)    | 0.075 (0.016)    | 0 (0.000) |     4.36 | cadnyx, Darendeli, eNs, scolleN, Vej |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($933.89)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-26 |      0.934 | $1,000.00      | $933.89         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
