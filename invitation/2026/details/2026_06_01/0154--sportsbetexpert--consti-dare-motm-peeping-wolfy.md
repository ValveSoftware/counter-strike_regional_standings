### Roster Details<br />
Team Name: SportsBetExpert<br />
Roster: consti, dare, motm, Peeping, WolfY<br />
Global Rank: [154](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_06_01.md)<br />
Regional Rank: [33]( ../../standings_americas_2026_06_01.md)<br />
<br />
Final Rank Value:  868.6<br />
<br />
Final Rank Value (868.6) = Starting Rank Value (821.1) + Head To Head Adjustments (47.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.284[<sup>1</sup>](#table2)
- Bounty Collected: 0.255[<sup>2</sup>](#table1)
- Opponent Network: 0.038[<sup>2</sup>](#table1)
- LAN Wins: 0.307[<sup>2</sup>](#table1)

The average of these factors is 0.221<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 821.1
- 400 + ( ( 0.221 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 821.1


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
|            7 |        7 | 2026-05-31 | Marsborne    | L   | 1.000      | -            | -                | -                | -         |    -9.60 | consti, dare, motm, Peeping, WolfY    |
|            6 |       13 | 2026-05-31 | Reign Above  | W   | 1.000      | 0.294        | 0.000 (0.000)    | 0.207 (0.061)    | 1 (1.000) |     9.24 | consti, dare, motm, Peeping, WolfY    |
|            5 |       26 | 2026-05-30 | LAG          | W   | 1.000      | 0.294        | 0.033 (0.010)    | 0.681 (0.200)    | 1 (1.000) |    20.65 | consti, dare, motm, Peeping, WolfY    |
|            4 |       29 | 2026-05-30 | Chicken Coop | L   | 1.000      | -            | -                | -                | -         |    -9.98 | consti, dare, motm, Peeping, WolfY    |
|            3 |       47 | 2026-05-30 | NXG          | W   | 1.000      | 0.294        | 0.000 (0.000)    | 0.033 (0.010)    | 1 (1.000) |     3.08 | consti, dare, motm, Peeping, WolfY    |
|            2 |      243 | 2026-05-24 | ex-Aether    | W   | 1.000      | 0.278        | 0.004 (0.001)    | 0.163 (0.045)    | 0 (0.000) |    10.56 | consti, dare, Infinite, motm, Peeping |
|            1 |      246 | 2026-05-24 | Marsborne    | W   | 1.000      | 0.278        | 0.004 (0.001)    | 0.229 (0.064)    | 0 (0.000) |    23.51 | consti, dare, Infinite, motm, Peeping |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,900.00)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-31 |      1.000 | $400.00        | $400.00         |
| 2026-05-24 |      1.000 | $1,500.00      | $1,500.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
