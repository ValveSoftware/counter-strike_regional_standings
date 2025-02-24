### Roster Details<br />
Team Name: IHC<br />
Roster: AccuracyTG, Efire, rate, ROUX, Zesta<br />
Global Rank: [172](../../standings_global_2025_02_24.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_02_24.md)<br />
Regional Rank: [16]( ../../standings_asia_2025_02_24.md)<br />
<br />
Final Rank Value:  654.1<br />
<br />
Final Rank Value (654.1) = Starting Rank Value (647.5) + Head To Head Adjustments (6.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.286[<sup>1</sup>](#table2)
- Bounty Collected: 0.226[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.130<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 647.5
- 400 + ( ( 0.130 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 647.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1617 | 2024-11-08 | ex-GR    | L   | 0.477      | -            | -                | -                | -         |    -6.65 | AccuracyTG, Efire, rate, ROUX, Zesta |
|            4 |     1623 | 2024-11-07 | The Huns | W   | 0.476      | 0.333        | 0.023 (0.004)    | 0.438 (0.069)    | 0 (0.000) |    11.89 | AccuracyTG, Efire, rate, ROUX, Zesta |
|            3 |     1641 | 2024-11-07 | Clutch   | W   | 0.470      | 0.333        | 0.000 (0.000)    | 0.061 (0.010)    | 0 (0.000) |     5.01 | AccuracyTG, Efire, rate, ROUX, Zesta |
|            2 |     1676 | 2024-11-05 | ex-GR    | L   | 0.456      | -            | -                | -                | -         |    -6.46 | AccuracyTG, Efire, rate, ROUX, Zesta |
|            1 |     1677 | 2024-11-04 | NOVA     | W   | 0.456      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.85 | AccuracyTG, Efire, rate, ROUX, Zesta |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,193.17)
- Divide that value by the 5th highest value among all rosters ($371,464.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-08 |      0.477 | $2,500.00      | $1,193.17       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
