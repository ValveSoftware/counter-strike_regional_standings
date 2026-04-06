### Roster Details<br />
Team Name: Let Her Cook<br />
Roster: JennyR, Joanana, pauliiee, spike, vilga<br />
Global Rank: [204](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_04_06.md)<br />
Regional Rank: [136]( ../../standings_europe_2026_04_06.md)<br />
<br />
Final Rank Value:  743.7<br />
<br />
Final Rank Value (743.7) = Starting Rank Value (741.4) + Head To Head Adjustments (2.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.379[<sup>1</sup>](#table2)
- Bounty Collected: 0.276[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.034[<sup>2</sup>](#table1)

The average of these factors is 0.175<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 741.4
- 400 + ( ( 0.175 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 741.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     2501 | 2026-02-15 | Pigeons            | L   | 0.868      | -            | -                | -                | -         |   -12.17 | JennyR, Joanana, pauliiee, spike, vilga     |
|           14 |     2544 | 2026-02-14 | BIG EQUIPA         | W   | 0.862      | 0.384        | 0.063 (0.021)    | 0.119 (0.039)    | 0 (0.000) |    16.09 | JennyR, Joanana, pauliiee, spike, vilga     |
|           13 |     2591 | 2026-02-14 | Fingers Crossed fe | W   | 0.859      | 0.384        | 0.002 (0.001)    | 0.067 (0.022)    | 0 (0.000) |     9.72 | JennyR, Joanana, pauliiee, spike, vilga     |
|           12 |     2620 | 2026-02-13 | Pigeons            | L   | 0.854      | -            | -                | -                | -         |   -12.07 | JennyR, Joanana, pauliiee, spike, vilga     |
|           11 |     2654 | 2026-02-12 | hindsight          | W   | 0.849      | 0.384        | 0.001 (0.000)    | 0.026 (0.008)    | 0 (0.000) |     8.70 | JennyR, ManeschijnX, pauliiee, spike, vilga |
|           10 |     2699 | 2026-02-11 | BIG EQUIPA         | L   | 0.842      | -            | -                | -                | -         |    -9.71 | JennyR, Joanana, pauliiee, spike, vilga     |
|            9 |     2735 | 2026-02-10 | hindsight          | W   | 0.835      | 0.384        | 0.001 (0.000)    | 0.026 (0.008)    | 0 (0.000) |     8.38 | JennyR, Joanana, pauliiee, spike, vilga     |
|            8 |     4197 | 2025-11-29 | BIG EQUIPA         | L   | 0.347      | -            | -                | -                | -         |    -4.12 | JennyR, Joanana, meli, spike, xia           |
|            7 |     4236 | 2025-11-28 | Sakura             | L   | 0.340      | -            | -                | -                | -         |    -5.35 | JennyR, Joanana, meli, spike, xia           |
|            6 |     4244 | 2025-11-28 | FlyQuest RED       | W   | 0.338      | 0.605        | 0.007 (0.001)    | 0.072 (0.015)    | 1 (0.338) |     4.34 | JennyR, Joanana, meli, spike, xia           |
|            5 |     5212 | 2025-10-26 | Flame Sharks fe    | W   | 0.122      | 0.523        | 0.000 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     1.18 | JennyR, Joanana, meli, spike, xia           |
|            4 |     5276 | 2025-10-25 | Pigeons            | L   | 0.114      | -            | -                | -                | -         |    -1.52 | JennyR, Joanana, meli, spike, xia           |
|            3 |     5336 | 2025-10-24 | NIP Impact         | L   | 0.108      | -            | -                | -                | -         |    -1.71 | JennyR, Joanana, meli, spike, xia           |
|            2 |     5577 | 2025-10-15 | hindsight          | W   | 0.048      | 0.523        | 0.001 (0.000)    | 0.026 (0.001)    | 0 (0.000) |     0.50 | JennyR, Joanana, meli, spike, xia           |
|            1 |     5798 | 2025-10-08 | 888aura            | L   | 0.001      | -            | -                | -                | -         |    -0.03 | JennyR, Joanana, meli, spike, xia           |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,596.04)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-15 |      0.868 | $5,000.00      | $4,338.30       |
| 2025-11-30 |      0.354 | $17,000.00     | $6,014.73       |
| 2025-10-26 |      0.122 | $2,000.00      | $243.01         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
