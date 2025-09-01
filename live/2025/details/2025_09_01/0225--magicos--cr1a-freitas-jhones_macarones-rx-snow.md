### Roster Details<br />
Team Name: MAGICOS<br />
Roster: Cr1a, freitas, Jhones Macarones, rx, snow<br />
Global Rank: [225](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_09_01.md)<br />
Regional Rank: [75]( ../../standings_americas_2025_09_01.md)<br />
<br />
Final Rank Value:  555.1<br />
<br />
Final Rank Value (555.1) = Starting Rank Value (618.0) + Head To Head Adjustments (-62.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.232[<sup>1</sup>](#table2)
- Bounty Collected: 0.206[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.114<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 618.0
- 400 + ( ( 0.114 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 618.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      391 | 2025-08-13 | KRÜ            | L   | 1.000      | -            | -                | -                | -         |    -8.05 | Cr1a, freitas, Jhones Macarones, rx, snow     |
|           13 |      478 | 2025-08-11 | SELVA          | L   | 1.000      | -            | -                | -                | -         |    -8.03 | Cr1a, freitas, Jhones Macarones, rx, snow     |
|           12 |      496 | 2025-08-11 | JERSA          | L   | 1.000      | -            | -                | -                | -         |   -20.68 | BALEROSTYLE, Cr1a, Jhones Macarones, rx, snow |
|           11 |      544 | 2025-08-09 | Yawara         | L   | 1.000      | -            | -                | -                | -         |   -10.15 | BALEROSTYLE, Cr1a, Jhones Macarones, rx, snow |
|           10 |      560 | 2025-08-08 | KRÜ            | L   | 1.000      | -            | -                | -                | -         |   -10.38 | BALEROSTYLE, Cr1a, Jhones Macarones, rx, snow |
|            9 |      694 | 2025-07-30 | Yawara         | L   | 0.981      | -            | -                | -                | -         |   -12.91 | Cr1a, freitas, Jhones Macarones, rx, snow     |
|            8 |      724 | 2025-07-28 | 2GAME          | L   | 0.968      | -            | -                | -                | -         |    -7.80 | Cr1a, freitas, Jhones Macarones, rx, snow     |
|            7 |      762 | 2025-07-27 | LP             | W   | 0.960      | 0.371        | 0.003 (0.001)    | 0.245 (0.087)    | 0 (0.000) |    18.76 | Cr1a, freitas, Jhones Macarones, rx, snow     |
|            6 |      816 | 2025-07-24 | Bounty Hunters | L   | 0.942      | -            | -                | -                | -         |    -9.16 | Cr1a, freitas, Jhones Macarones, rx, snow     |
|            5 |     1852 | 2025-05-18 | Flamengo       | L   | 0.495      | -            | -                | -                | -         |    -3.54 | Cr1a, ghosT1, Jhones Macarones, rx, snow      |
|            4 |     1887 | 2025-05-16 | RED Canids     | L   | 0.481      | -            | -                | -                | -         |    -3.68 | Cr1a, ghosT1, Jhones Macarones, rx, snow      |
|            3 |     1935 | 2025-05-14 | LP             | W   | 0.468      | 0.366        | 0.003 (0.000)    | 0.245 (0.042)    | 0 (0.000) |     9.20 | Cr1a, ghosT1, Jhones Macarones, rx, snow      |
|            2 |     1958 | 2025-05-13 | Keyd Stars     | L   | 0.462      | -            | -                | -                | -         |    -4.72 | Cr1a, ghosT1, Jhones Macarones, rx, snow      |
|            1 |     1970 | 2025-05-13 | Players        | W   | 0.461      | 0.366        | 0.000 (0.000)    | 0.238 (0.040)    | 0 (0.000) |     8.24 | Cr1a, ghosT1, Jhones Macarones, rx, snow      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($202.74)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-29 |      0.568 | $357.00        | $202.74         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
