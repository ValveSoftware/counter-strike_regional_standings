### Roster Details<br />
Team Name: FORZE Reload<br />
Roster: dwushka, KusMe, shady, spirit, xdENiSZERA<br />
Global Rank: [141](../../standings_global_2025_02_24.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_24.md)<br />
Regional Rank: [98]( ../../standings_europe_2025_02_24.md)<br />
<br />
Final Rank Value:  693.3<br />
<br />
Final Rank Value (693.3) = Starting Rank Value (684.7) + Head To Head Adjustments (8.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.351[<sup>1</sup>](#table2)
- Bounty Collected: 0.235[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.150<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 684.7
- 400 + ( ( 0.150 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 684.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      734 | 2024-12-20 | AMKAL    | L   | 0.758      | -            | -                | -                | -         |    -9.52 | dwushka, KusMe, shady, spirit, xdENiSZERA |
|            5 |      748 | 2024-12-19 | K27      | W   | 0.752      | 0.333        | 0.003 (0.001)    | 0.156 (0.039)    | 0 (0.000) |    11.80 | dwushka, KusMe, shady, spirit, xdENiSZERA |
|            4 |      796 | 2024-12-15 | RUSH B   | L   | 0.725      | -            | -                | -                | -         |    -7.45 | dwushka, KusMe, shady, spirit, xdENiSZERA |
|            3 |     1029 | 2024-12-04 | Monte    | L   | 0.652      | -            | -                | -                | -         |    -7.29 | dwushka, KusMe, shady, spirit, xdENiSZERA |
|            2 |     1049 | 2024-12-03 | Viperio  | W   | 0.645      | 0.333        | 0.002 (0.000)    | 0.087 (0.019)    | 0 (0.000) |     7.86 | dwushka, KusMe, shady, spirit, xdENiSZERA |
|            1 |     1074 | 2024-12-02 | BC.Game  | W   | 0.637      | 0.333        | 0.021 (0.004)    | 0.289 (0.061)    | 0 (0.000) |    13.19 | dwushka, KusMe, shady, spirit, xdENiSZERA |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,260.23)
- Divide that value by the 5th highest value among all rosters ($371,464.45)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-21 |      0.765 | $1,000.00      | $764.85         |
| 2024-12-15 |      0.725 | $3,500.00      | $2,538.84       |
| 2024-12-04 |      0.652 | $3,000.00      | $1,956.54       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
