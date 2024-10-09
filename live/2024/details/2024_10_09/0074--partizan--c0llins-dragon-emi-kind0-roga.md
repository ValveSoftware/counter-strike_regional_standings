### Roster Details<br />
Team Name: Partizan<br />
Roster: c0llins, Dragon, emi, Kind0, ROGA<br />
Global Rank: [74](../../standings_global_2024_10_09.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_09.md)<br />
Regional Rank: [54]( ../../standings_europe_2024_10_09.md)<br />
<br />
Final Rank Value:  922.5<br />
<br />
Final Rank Value (922.5) = Starting Rank Value (854.1) + Head To Head Adjustments (68.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.430[<sup>1</sup>](#table2)
- Bounty Collected: 0.341[<sup>2</sup>](#table1)
- Opponent Network: 0.169[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.235<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 854.1
- 400 + ( ( 0.235 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 854.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           22 |      189 | 2024-10-03 | Johnny Speeds     | L   | 1.000      | -            | -                | -                | -         |   -12.66 | c0llins, Dragon, emi, Kind0, ROGA   |
|           21 |      192 | 2024-10-03 | GUN5              | W   | 1.000      | 0.384        | 0.096 (0.037)    | 1.000 (0.384)    | 0 (0.000) |    20.45 | c0llins, Dragon, emi, Kind0, ROGA   |
|           20 |      236 | 2024-10-02 | Insilio           | W   | 1.000      | 0.384        | 0.040 (0.015)    | 0.678 (0.261)    | 0 (0.000) |    19.00 | c0llins, Dragon, emi, Kind0, ROGA   |
|           19 |      283 | 2024-10-01 | UNiTY             | W   | 1.000      | 0.333        | 0.046 (0.015)    | 0.470 (0.157)    | 0 (0.000) |    19.48 | c0llins, Dragon, emi, Kind0, ROGA   |
|           18 |      671 | 2024-09-20 | Aurora Young Blud | W   | 1.000      | 0.384        | 0.014 (0.006)    | 0.583 (0.224)    | 0 (0.000) |    15.61 | c0llins, Dragon, emi, Kind0, ROGA   |
|           17 |      825 | 2024-09-15 | Permitta          | L   | 1.000      | -            | -                | -                | -         |   -14.16 | c0llins, Dragon, emi, Kind0, ROGA   |
|           16 |     1054 | 2024-09-07 | ex-Enterprise     | W   | 0.987      | 0.384        | 0.028 (0.010)    | 0.457 (0.173)    | 0 (0.000) |    13.63 | Dragon, emi, Kind0, ROGA, xicoz     |
|           15 |     1240 | 2024-09-01 | Rebels            | W   | 0.946      | 0.384        | 0.049 (0.018)    | 0.560 (0.204)    | 0 (0.000) |    19.98 | c0llins, Dragon, emi, Kind0, ROGA   |
|           14 |     3026 | 2024-07-13 | Nexus             | L   | 0.613      | -            | -                | -                | -         |   -12.41 | c0llins, choiv7, Dragon, emi, Kind0 |
|           13 |     3075 | 2024-07-10 | Israel            | W   | 0.593      | -            | -                | -                | 0 (0.000) |     1.37 | c0llins, Dragon, emi, Kind0, VLDN   |
|           12 |     3086 | 2024-07-09 | North Macedonia   | W   | 0.588      | -            | -                | -                | 0 (0.000) |     1.37 | c0llins, choiv7, Dragon, emi, Kind0 |
|           11 |     3093 | 2024-07-09 | Turkey            | L   | 0.587      | -            | -                | -                | -         |   -16.10 | c0llins, choiv7, Dragon, emi, Kind0 |
|           10 |     3635 | 2024-06-06 | Passion UA        | L   | 0.366      | -            | -                | -                | -         |    -2.82 | aidKiT, c0llins, Dragon, emi, xicoz |
|            9 |     3679 | 2024-06-05 | ex-Enterprise     | W   | 0.360      | 0.371        | 0.028 (0.004)    | 0.457 (0.061)    | 0 (0.000) |     5.57 | aidKiT, c0llins, Dragon, emi, VLDN  |
|            8 |     3732 | 2024-06-04 | Passion UA        | L   | 0.353      | -            | -                | -                | -         |    -2.62 | aidKiT, c0llins, Dragon, emi, xicoz |
|            7 |     3783 | 2024-06-02 | Apogee            | W   | 0.339      | 0.371        | -                | 0.558 (0.070)    | 0 (0.000) |     5.09 | aidKiT, c0llins, Dragon, emi, xicoz |
|            6 |     3871 | 2024-05-30 | Permitta          | W   | 0.319      | 0.371        | 0.036 (0.004)    | 0.918 (0.109)    | -         |     5.97 | aidKiT, c0llins, Dragon, emi, xicoz |
|            5 |     3971 | 2024-05-25 | Zero Tenacity     | L   | 0.287      | -            | -                | -                | -         |    -2.28 | aidKiT, c0llins, Dragon, emi, xicoz |
|            4 |     3977 | 2024-05-25 | UNiTY             | W   | 0.286      | 0.371        | 0.046 (0.005)    | 0.470 (0.050)    | -         |     6.87 | aidKiT, c0llins, Dragon, emi, xicoz |
|            3 |     3990 | 2024-05-24 | ex-Guild Eagles   | L   | 0.280      | -            | -                | -                | -         |    -6.43 | aidKiT, c0llins, Dragon, emi, xicoz |
|            2 |     4092 | 2024-05-21 | kONO              | W   | 0.259      | 0.371        | 0.024 (0.002)    | -                | -         |     3.69 | aidKiT, c0llins, Dragon, emi, xicoz |
|            1 |     4965 | 2024-04-18 | BetBoom           | L   | 0.040      | -            | -                | -                | -         |    -0.17 | aidKiT, c0llins, Dragon, emi, xicoz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($14,328.99)
- Divide that value by the 5th highest value among all rosters ($304,769.86)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-03 |      1.000 | $12,500.00     | $12,500.00      |
| 2024-06-06 |      0.366 | $5,000.00      | $1,828.99       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
