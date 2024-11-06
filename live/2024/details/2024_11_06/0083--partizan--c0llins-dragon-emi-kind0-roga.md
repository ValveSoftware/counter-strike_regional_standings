### Roster Details<br />
Team Name: Partizan<br />
Roster: c0llins, Dragon, emi, Kind0, ROGA<br />
Global Rank: [83](../../standings_global_2024_11_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_11_06.md)<br />
Regional Rank: [58]( ../../standings_europe_2024_11_06.md)<br />
<br />
Final Rank Value:  890.5<br />
<br />
Final Rank Value (890.5) = Starting Rank Value (812.7) + Head To Head Adjustments (77.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.390[<sup>1</sup>](#table2)
- Bounty Collected: 0.309[<sup>2</sup>](#table1)
- Opponent Network: 0.142[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.210<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 812.7
- 400 + ( ( 0.210 - 0.000 ) / ( 0.815 - 0.000 ) ) * 1600 = 812.7


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
|           21 |      735 | 2024-10-03 | Johnny Speeds     | L   | 0.974      | -            | -                | -                | -         |   -11.94 | c0llins, Dragon, emi, Kind0, ROGA   |
|           20 |      738 | 2024-10-03 | GUN5              | W   | 0.974      | 0.384        | 0.050 (0.019)    | 1.000 (0.374)    | 0 (0.000) |    20.92 | c0llins, Dragon, emi, Kind0, ROGA   |
|           19 |      782 | 2024-10-02 | Insilio           | W   | 0.966      | 0.384        | 0.020 (0.007)    | 0.730 (0.271)    | 0 (0.000) |    19.53 | c0llins, Dragon, emi, Kind0, ROGA   |
|           18 |      829 | 2024-10-01 | UNiTY             | W   | 0.959      | 0.333        | 0.024 (0.008)    | 0.429 (0.137)    | 0 (0.000) |    19.25 | c0llins, Dragon, emi, Kind0, ROGA   |
|           17 |     1217 | 2024-09-20 | Aurora Young Blud | W   | 0.887      | 0.384        | 0.019 (0.007)    | 0.670 (0.229)    | 0 (0.000) |    15.23 | c0llins, Dragon, emi, Kind0, ROGA   |
|           16 |     1371 | 2024-09-15 | Permitta          | L   | 0.853      | -            | -                | -                | -         |    -8.99 | c0llins, Dragon, emi, Kind0, ROGA   |
|           15 |     1600 | 2024-09-07 | ex-Enterprise     | W   | 0.800      | 0.384        | 0.017 (0.005)    | 0.441 (0.135)    | 0 (0.000) |    14.38 | Dragon, emi, Kind0, ROGA, xicoz     |
|           14 |     1786 | 2024-09-01 | Rebels            | W   | 0.759      | 0.384        | 0.032 (0.009)    | 0.516 (0.151)    | 0 (0.000) |    16.53 | c0llins, Dragon, emi, Kind0, ROGA   |
|           13 |     3572 | 2024-07-13 | Nexus             | L   | 0.427      | -            | -                | -                | -         |    -6.22 | c0llins, choiv7, Dragon, emi, Kind0 |
|           12 |     3621 | 2024-07-10 | Israel            | W   | 0.407      | -            | -                | -                | 0 (0.000) |     1.17 | c0llins, Dragon, emi, Kind0, VLDN   |
|           11 |     3632 | 2024-07-09 | North Macedonia   | W   | 0.401      | -            | -                | -                | 0 (0.000) |     1.16 | c0llins, choiv7, Dragon, emi, Kind0 |
|           10 |     3639 | 2024-07-09 | Turkey            | L   | 0.401      | -            | -                | -                | -         |   -10.70 | c0llins, choiv7, Dragon, emi, Kind0 |
|            9 |     4181 | 2024-06-06 | Passion UA        | L   | 0.179      | -            | -                | -                | -         |    -1.37 | aidKiT, c0llins, Dragon, emi, xicoz |
|            8 |     4225 | 2024-06-05 | ex-Enterprise     | W   | 0.174      | 0.371        | 0.017 (0.001)    | 0.441 (0.028)    | 0 (0.000) |     3.87 | aidKiT, c0llins, Dragon, emi, VLDN  |
|            7 |     4278 | 2024-06-04 | Passion UA        | L   | 0.166      | -            | -                | -                | -         |    -1.25 | aidKiT, c0llins, Dragon, emi, xicoz |
|            6 |     4329 | 2024-06-02 | Apogee            | W   | 0.153      | 0.371        | 0.008 (0.000)    | 0.523 (0.030)    | 0 (0.000) |     2.28 | aidKiT, c0llins, Dragon, emi, xicoz |
|            5 |     4417 | 2024-05-30 | Permitta          | W   | 0.133      | 0.371        | 0.029 (0.001)    | 1.000 (0.049)    | -         |     3.49 | aidKiT, c0llins, Dragon, emi, xicoz |
|            4 |     4517 | 2024-05-25 | Zero Tenacity     | L   | 0.100      | -            | -                | -                | -         |    -0.82 | aidKiT, c0llins, Dragon, emi, xicoz |
|            3 |     4523 | 2024-05-25 | UNiTY             | W   | 0.099      | 0.371        | 0.024 (0.001)    | 0.429 (0.016)    | -         |     2.29 | aidKiT, c0llins, Dragon, emi, xicoz |
|            2 |     4536 | 2024-05-24 | ex-Guild Eagles   | L   | 0.093      | -            | -                | -                | -         |    -2.18 | aidKiT, c0llins, Dragon, emi, xicoz |
|            1 |     4638 | 2024-05-21 | kONO              | W   | 0.073      | -            | -                | -                | -         |     1.15 | aidKiT, c0llins, Dragon, emi, xicoz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($13,066.95)
- Divide that value by the 5th highest value among all rosters ($478,523.89)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-03 |      0.974 | $12,500.00     | $12,170.90      |
| 2024-06-06 |      0.179 | $5,000.00      | $896.05         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
