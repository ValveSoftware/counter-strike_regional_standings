### Roster Details<br />
Team Name: SportsBetExpert<br />
Roster: consti, dare, motm, Peeping, WolfY<br />
Global Rank: [147](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_07_06.md)<br />
Regional Rank: [32]( ../../standings_americas_2026_07_06.md)<br />
<br />
Final Rank Value:  850.8<br />
<br />
Final Rank Value (850.8) = Starting Rank Value (809.2) + Head To Head Adjustments (41.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.285[<sup>1</sup>](#table2)
- Bounty Collected: 0.250[<sup>2</sup>](#table1)
- Opponent Network: 0.033[<sup>2</sup>](#table1)
- LAN Wins: 0.300[<sup>2</sup>](#table1)

The average of these factors is 0.217<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 809.2
- 400 + ( ( 0.217 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 809.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      624 | 2026-05-31 | Marsborne    | L   | 0.961      | -            | -                | -                | -         |    -9.93 | consti, dare, motm, Peeping, WolfY    |
|            6 |      631 | 2026-05-31 | Reign Above  | W   | 0.960      | 0.294        | 0.000 (0.000)    | 0.190 (0.054)    | 1 (0.960) |     8.86 | consti, dare, motm, Peeping, WolfY    |
|            5 |      647 | 2026-05-30 | LAG          | W   | 0.957      | 0.294        | 0.024 (0.007)    | 0.520 (0.146)    | 1 (0.957) |    18.68 | consti, dare, motm, Peeping, WolfY    |
|            4 |      650 | 2026-05-30 | Chicken Coop | L   | 0.955      | -            | -                | -                | -         |    -9.60 | consti, dare, motm, Peeping, WolfY    |
|            3 |      668 | 2026-05-30 | NXG          | W   | 0.954      | 0.294        | 0.000 (0.000)    | 0.035 (0.010)    | 1 (0.954) |     3.15 | consti, dare, motm, Peeping, WolfY    |
|            2 |      900 | 2026-05-24 | ex-Aether    | W   | 0.916      | 0.278        | 0.004 (0.001)    | 0.143 (0.036)    | 0 (0.000) |     9.75 | consti, dare, Infinite, motm, Peeping |
|            1 |      903 | 2026-05-24 | Marsborne    | W   | 0.915      | 0.278        | 0.010 (0.002)    | 0.333 (0.085)    | 0 (0.000) |    20.66 | consti, dare, Infinite, motm, Peeping |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,758.92)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-31 |      0.962 | $400.00        | $384.81         |
| 2026-05-24 |      0.916 | $1,500.00      | $1,374.10       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
