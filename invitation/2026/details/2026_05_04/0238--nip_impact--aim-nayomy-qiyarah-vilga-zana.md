### Roster Details<br />
Team Name: NIP Impact<br />
Roster: aiM, Nayomy, Qiyarah, vilga, Zana<br />
Global Rank: [238](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_05_04.md)<br />
Regional Rank: [152]( ../../standings_europe_2026_05_04.md)<br />
<br />
Final Rank Value:  674.3<br />
<br />
Final Rank Value (674.3) = Starting Rank Value (671.3) + Head To Head Adjustments (2.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.331[<sup>1</sup>](#table2)
- Bounty Collected: 0.221[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.031[<sup>2</sup>](#table1)

The average of these factors is 0.146<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 671.3
- 400 + ( ( 0.146 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 671.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     5258 | 2025-11-30 | BIG EQUIPA     | L   | 0.166      | -            | -                | -                | -         |    -2.21 | aiM, Nayomy, Qiyarah, vilga, Zana |
|            4 |     5331 | 2025-11-28 | Atrix          | W   | 0.153      | 0.605        | 0.007 (0.001)    | 0.037 (0.003)    | 1 (0.153) |     2.51 | aiM, Nayomy, Qiyarah, vilga, Zana |
|            3 |     5338 | 2025-11-28 | Clutchain fe   | W   | 0.152      | 0.605        | 0.025 (0.002)    | 0.261 (0.024)    | 1 (0.152) |     2.84 | aiM, Nayomy, Qiyarah, vilga, Zana |
|            2 |     5799 | 2025-11-09 | Clutchain fe   | L   | 0.027      | -            | -                | -                | -         |    -0.35 | aiM, Nayomy, Qiyarah, vilga, Zana |
|            1 |     5900 | 2025-11-07 | Nemesis Impact | W   | 0.014      | 0.307        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.14 | aiM, Nayomy, Qiyarah, vilga, Zana |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,420.71)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-30 |      0.167 | $26,500.00     | $4,420.71       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
