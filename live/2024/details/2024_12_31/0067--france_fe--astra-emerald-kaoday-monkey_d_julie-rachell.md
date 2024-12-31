### Roster Details<br />
Team Name: France fe<br />
Roster: ASTRA, Emerald, Kaoday, Monkey D Julie, RacheLL<br />
Global Rank: [67](../../standings_global_2024_12_31.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_31.md)<br />
Regional Rank: [48]( ../../standings_europe_2024_12_31.md)<br />
<br />
Final Rank Value:  1003.7<br />
<br />
Final Rank Value (1003.7) = Starting Rank Value (992.6) + Head To Head Adjustments (11.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.522[<sup>1</sup>](#table2)
- Bounty Collected: 0.301[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.382[<sup>2</sup>](#table1)

The average of these factors is 0.304<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 992.6
- 400 + ( ( 0.304 - 0.000 ) / ( 0.821 - 0.000 ) ) * 1600 = 992.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |      756 | 2024-11-14 | NAVI Javelins | L   | 0.900      | -            | -                | -                | -         |    -6.39 | ASTRA, Emerald, Kaoday, Monkey D Julie, RacheLL |
|            9 |      785 | 2024-11-14 | Portugal fe   | W   | 0.898      | 0.557        | 0.060 (0.030)    | 0.077 (0.039)    | 1 (0.898) |    10.83 | ASTRA, Emerald, Kaoday, Monkey D Julie, RacheLL |
|            8 |      811 | 2024-11-13 | Denmark fe    | W   | 0.891      | 0.557        | 0.018 (0.009)    | 0.120 (0.059)    | 1 (0.891) |     5.94 | ASTRA, Emerald, Kaoday, Monkey D Julie, RacheLL |
|            7 |      865 | 2024-11-11 | Sweden fe     | W   | 0.880      | 0.557        | 0.015 (0.007)    | 0.038 (0.019)    | 1 (0.880) |     3.96 | ASTRA, Emerald, Kaoday, Monkey D Julie, RacheLL |
|            6 |      871 | 2024-11-11 | Argentina fe  | W   | 0.879      | 0.557        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.879) |     0.98 | ASTRA, Emerald, Kaoday, Monkey D Julie, RacheLL |
|            5 |     4202 | 2024-07-21 | K27 fe        | L   | 0.126      | -            | -                | -                | -         |    -3.19 | ASTRA, Emerald, Hikomi, Monkey D Julie, RacheLL |
|            4 |     4209 | 2024-07-21 | NIP Impact    | W   | 0.125      | 0.294        | 0.023 (0.001)    | 0.154 (0.006)    | 0 (0.000) |     0.97 | ASTRA, Emerald, Hikomi, Monkey D Julie, RacheLL |
|            3 |     4243 | 2024-07-20 | EK Violet     | W   | 0.119      | 0.294        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.13 | ASTRA, Emerald, Hikomi, Monkey D Julie, RacheLL |
|            2 |     4514 | 2024-07-14 | Insilio fe    | L   | 0.080      | -            | -                | -                | -         |    -2.24 | ASTRA, Emerald, Kaoday, Monkey D Julie, RacheLL |
|            1 |     4524 | 2024-07-14 | OneDay fe     | W   | 0.079      | 0.303        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.15 | ASTRA, Emerald, Kaoday, Monkey D Julie, RacheLL |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($36,215.45)
- Divide that value by the 5th highest value among all rosters ($298,653.52)
- The final value (0.12) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-14 |      0.900 | $40,000.00     | $36,009.09      |
| 2024-07-21 |      0.126 | $1,000.00      | $125.93         |
| 2024-07-14 |      0.080 | $1,000.00      | $80.43          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
