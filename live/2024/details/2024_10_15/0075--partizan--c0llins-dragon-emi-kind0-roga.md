### Roster Details<br />
Team Name: Partizan<br />
Roster: c0llins, Dragon, emi, Kind0, ROGA<br />
Global Rank: [75](../../standings_global_2024_10_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_15.md)<br />
Regional Rank: [54]( ../../standings_europe_2024_10_15.md)<br />
<br />
Final Rank Value:  918.3<br />
<br />
Final Rank Value (918.3) = Starting Rank Value (850.8) + Head To Head Adjustments (67.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.427[<sup>1</sup>](#table2)
- Bounty Collected: 0.337[<sup>2</sup>](#table1)
- Opponent Network: 0.163[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.232<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 850.8
- 400 + ( ( 0.232 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 850.8


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
|           22 |      286 | 2024-10-03 | Johnny Speeds     | L   | 1.000      | -            | -                | -                | -         |   -12.84 | c0llins, Dragon, emi, Kind0, ROGA   |
|           21 |      289 | 2024-10-03 | GUN5              | W   | 1.000      | 0.384        | 0.096 (0.037)    | 1.000 (0.384)    | 0 (0.000) |    20.42 | c0llins, Dragon, emi, Kind0, ROGA   |
|           20 |      333 | 2024-10-02 | Insilio           | W   | 1.000      | 0.384        | 0.038 (0.015)    | 0.690 (0.265)    | 0 (0.000) |    19.12 | c0llins, Dragon, emi, Kind0, ROGA   |
|           19 |      380 | 2024-10-01 | UNiTY             | W   | 1.000      | 0.333        | 0.043 (0.014)    | 0.461 (0.154)    | 0 (0.000) |    19.67 | c0llins, Dragon, emi, Kind0, ROGA   |
|           18 |      768 | 2024-09-20 | Aurora Young Blud | W   | 1.000      | 0.384        | 0.013 (0.005)    | 0.550 (0.211)    | 0 (0.000) |    15.69 | c0llins, Dragon, emi, Kind0, ROGA   |
|           17 |      922 | 2024-09-15 | Permitta          | L   | 1.000      | -            | -                | -                | -         |   -14.11 | c0llins, Dragon, emi, Kind0, ROGA   |
|           16 |     1151 | 2024-09-07 | ex-Enterprise     | W   | 0.947      | 0.384        | 0.025 (0.009)    | 0.463 (0.169)    | 0 (0.000) |    13.01 | Dragon, emi, Kind0, ROGA, xicoz     |
|           15 |     1337 | 2024-09-01 | Rebels            | W   | 0.906      | 0.384        | 0.046 (0.016)    | 0.542 (0.189)    | 0 (0.000) |    19.02 | c0llins, Dragon, emi, Kind0, ROGA   |
|           14 |     3123 | 2024-07-13 | Nexus             | L   | 0.574      | -            | -                | -                | -         |   -11.45 | c0llins, choiv7, Dragon, emi, Kind0 |
|           13 |     3172 | 2024-07-10 | Israel            | W   | 0.554      | -            | -                | -                | 0 (0.000) |     1.31 | c0llins, Dragon, emi, Kind0, VLDN   |
|           12 |     3183 | 2024-07-09 | North Macedonia   | W   | 0.548      | -            | -                | -                | 0 (0.000) |     1.30 | c0llins, choiv7, Dragon, emi, Kind0 |
|           11 |     3190 | 2024-07-09 | Turkey            | L   | 0.548      | -            | -                | -                | -         |   -14.98 | c0llins, choiv7, Dragon, emi, Kind0 |
|           10 |     3732 | 2024-06-06 | Passion UA        | L   | 0.326      | -            | -                | -                | -         |    -2.47 | aidKiT, c0llins, Dragon, emi, xicoz |
|            9 |     3776 | 2024-06-05 | ex-Enterprise     | W   | 0.321      | 0.371        | 0.025 (0.003)    | 0.463 (0.055)    | 0 (0.000) |     4.94 | aidKiT, c0llins, Dragon, emi, VLDN  |
|            8 |     3829 | 2024-06-04 | Passion UA        | L   | 0.313      | -            | -                | -                | -         |    -2.30 | aidKiT, c0llins, Dragon, emi, xicoz |
|            7 |     3880 | 2024-06-02 | Apogee            | W   | 0.300      | 0.371        | -                | 0.552 (0.061)    | 0 (0.000) |     4.41 | aidKiT, c0llins, Dragon, emi, xicoz |
|            6 |     3968 | 2024-05-30 | Permitta          | W   | 0.280      | 0.371        | 0.034 (0.004)    | 1.000 (0.104)    | -         |     5.27 | aidKiT, c0llins, Dragon, emi, xicoz |
|            5 |     4068 | 2024-05-25 | Zero Tenacity     | L   | 0.247      | -            | -                | -                | -         |    -1.97 | aidKiT, c0llins, Dragon, emi, xicoz |
|            4 |     4074 | 2024-05-25 | UNiTY             | W   | 0.246      | 0.371        | 0.043 (0.004)    | 0.461 (0.042)    | -         |     5.93 | aidKiT, c0llins, Dragon, emi, xicoz |
|            3 |     4087 | 2024-05-24 | ex-Guild Eagles   | L   | 0.240      | -            | -                | -                | -         |    -5.61 | aidKiT, c0llins, Dragon, emi, xicoz |
|            2 |     4189 | 2024-05-21 | kONO              | W   | 0.220      | 0.371        | 0.022 (0.002)    | -                | -         |     3.08 | aidKiT, c0llins, Dragon, emi, xicoz |
|            1 |     5062 | 2024-04-18 | BetBoom           | L   | 0.001      | -            | -                | -                | -         |    -0.00 | aidKiT, c0llins, Dragon, emi, xicoz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($14,130.89)
- Divide that value by the 5th highest value among all rosters ($308,815.62)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-03 |      1.000 | $12,500.00     | $12,500.00      |
| 2024-06-06 |      0.326 | $5,000.00      | $1,630.89       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
