### Roster Details<br />
Team Name: Partizan<br />
Roster: c0llins, Dragon, emi, Kind0, ROGA<br />
Global Rank: [81](../../standings_global_2024_10_30.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_30.md)<br />
Regional Rank: [58]( ../../standings_europe_2024_10_30.md)<br />
<br />
Final Rank Value:  945.2<br />
<br />
Final Rank Value (945.2) = Starting Rank Value (864.7) + Head To Head Adjustments (80.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.444[<sup>1</sup>](#table2)
- Bounty Collected: 0.347[<sup>2</sup>](#table1)
- Opponent Network: 0.146[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.234<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 864.7
- 400 + ( ( 0.234 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 864.7


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
|           21 |      594 | 2024-10-03 | Johnny Speeds     | L   | 1.000      | -            | -                | -                | -         |   -12.28 | c0llins, Dragon, emi, Kind0, ROGA   |
|           20 |      597 | 2024-10-03 | GUN5              | W   | 1.000      | 0.384        | 0.106 (0.041)    | 1.000 (0.384)    | 0 (0.000) |    21.38 | c0llins, Dragon, emi, Kind0, ROGA   |
|           19 |      641 | 2024-10-02 | Insilio           | W   | 1.000      | 0.384        | 0.042 (0.016)    | 0.653 (0.251)    | 0 (0.000) |    19.94 | c0llins, Dragon, emi, Kind0, ROGA   |
|           18 |      688 | 2024-10-01 | UNiTY             | W   | 1.000      | 0.333        | 0.050 (0.017)    | 0.428 (0.143)    | 0 (0.000) |    20.32 | c0llins, Dragon, emi, Kind0, ROGA   |
|           17 |     1076 | 2024-09-20 | Aurora Young Blud | W   | 0.933      | 0.384        | 0.039 (0.014)    | 0.630 (0.226)    | 0 (0.000) |    15.74 | c0llins, Dragon, emi, Kind0, ROGA   |
|           16 |     1230 | 2024-09-15 | Permitta          | L   | 0.899      | -            | -                | -                | -         |    -9.63 | c0llins, Dragon, emi, Kind0, ROGA   |
|           15 |     1459 | 2024-09-07 | ex-Enterprise     | W   | 0.846      | 0.384        | 0.037 (0.012)    | 0.445 (0.145)    | 0 (0.000) |    14.93 | Dragon, emi, Kind0, ROGA, xicoz     |
|           14 |     1645 | 2024-09-01 | Rebels            | W   | 0.806      | 0.384        | 0.066 (0.021)    | 0.476 (0.147)    | 0 (0.000) |    17.42 | c0llins, Dragon, emi, Kind0, ROGA   |
|           13 |     3431 | 2024-07-13 | Nexus             | L   | 0.473      | -            | -                | -                | -         |    -7.25 | c0llins, choiv7, Dragon, emi, Kind0 |
|           12 |     3480 | 2024-07-10 | Israel            | W   | 0.453      | -            | -                | -                | 0 (0.000) |     0.99 | c0llins, Dragon, emi, Kind0, VLDN   |
|           11 |     3491 | 2024-07-09 | North Macedonia   | W   | 0.447      | -            | -                | -                | 0 (0.000) |     0.98 | c0llins, choiv7, Dragon, emi, Kind0 |
|           10 |     3498 | 2024-07-09 | Turkey            | L   | 0.447      | -            | -                | -                | -         |   -12.34 | c0llins, choiv7, Dragon, emi, Kind0 |
|            9 |     4040 | 2024-06-06 | Passion UA        | L   | 0.225      | -            | -                | -                | -         |    -1.54 | aidKiT, c0llins, Dragon, emi, xicoz |
|            8 |     4084 | 2024-06-05 | ex-Enterprise     | W   | 0.220      | 0.371        | 0.037 (0.003)    | 0.445 (0.036)    | 0 (0.000) |     4.90 | aidKiT, c0llins, Dragon, emi, VLDN  |
|            7 |     4137 | 2024-06-04 | Passion UA        | L   | 0.212      | -            | -                | -                | -         |    -1.42 | aidKiT, c0llins, Dragon, emi, xicoz |
|            6 |     4188 | 2024-06-02 | Apogee            | W   | 0.199      | 0.371        | -                | 0.519 (0.038)    | 0 (0.000) |     2.85 | aidKiT, c0llins, Dragon, emi, xicoz |
|            5 |     4276 | 2024-05-30 | Permitta          | W   | 0.179      | 0.371        | 0.060 (0.004)    | 1.000 (0.066)    | -         |     4.72 | aidKiT, c0llins, Dragon, emi, xicoz |
|            4 |     4376 | 2024-05-25 | Zero Tenacity     | L   | 0.146      | -            | -                | -                | -         |    -1.13 | aidKiT, c0llins, Dragon, emi, xicoz |
|            3 |     4382 | 2024-05-25 | UNiTY             | W   | 0.145      | 0.371        | 0.050 (0.003)    | 0.428 (0.023)    | -         |     3.46 | aidKiT, c0llins, Dragon, emi, xicoz |
|            2 |     4395 | 2024-05-24 | ex-Guild Eagles   | L   | 0.139      | -            | -                | -                | -         |    -3.37 | aidKiT, c0llins, Dragon, emi, xicoz |
|            1 |     4497 | 2024-05-21 | kONO              | W   | 0.119      | 0.371        | 0.035 (0.002)    | -                | -         |     1.87 | aidKiT, c0llins, Dragon, emi, xicoz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($13,627.04)
- Divide that value by the 5th highest value among all rosters ($242,848.56)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-03 |      1.000 | $12,500.00     | $12,500.00      |
| 2024-06-06 |      0.225 | $5,000.00      | $1,127.04       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
