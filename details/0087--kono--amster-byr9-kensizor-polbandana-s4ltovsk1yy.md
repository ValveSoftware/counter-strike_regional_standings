### Roster Details<br />
Team Name: kONO<br />
Roster: amster, byr9, kensizor, Polbandana, s4ltovsk1yy<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [87](../standings_global.md)<br />
Regional Rank: [62]( ../standings_europe.md)<br />
Final Rank Value:  926.6<br />
<br />
Final Rank Value (926.6) = Starting Rank Value (831.2) + Head To Head Adjustments (95.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.403[<sup>1</sup>](#table2)
- Bounty Collected: 0.340[<sup>2</sup>](#table1)
- Opponent Network: 0.106[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.212<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 831.2
- 400 + ( ( 0.212 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 831.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           31 |        0 | 2024-06-18 | UNiTY             | W   | 1.000      | 0.333        | 0.038 (0.013)    | 0.288 (0.096)    | 0 (0.000) |    19.14 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           30 |        5 | 2024-06-17 | EXO               | W   | 1.000      | 0.333        | 0.020 (0.007)    | 0.137 (0.046)    | 0 (0.000) |    12.34 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           29 |      797 | 2024-05-25 | Rebels            | L   | 1.000      | -            | -                | -                | -         |    -7.75 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           28 |      907 | 2024-05-21 | ex-iNation        | L   | 1.000      | -            | -                | -                | -         |   -20.74 | aidKiT, c0llins, Dragon, emi, xicoz             |
|           27 |     1066 | 2024-05-16 | Monte             | L   | 0.982      | -            | -                | -                | -         |    -3.61 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           26 |     1077 | 2024-05-16 | Zero Tenacity     | L   | 0.980      | -            | -                | -                | -         |    -8.66 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           25 |     1127 | 2024-05-15 | Preasy            | W   | 0.974      | 0.333        | 0.012 (0.004)    | 0.169 (0.055)    | 0 (0.000) |     9.47 | Beccie, Equip, Griller, Skejs, VireZ            |
|           24 |     1174 | 2024-05-14 | Alliance          | W   | 0.968      | 0.384        | 0.018 (0.007)    | 0.432 (0.161)    | 0 (0.000) |    15.78 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           23 |     1181 | 2024-05-14 | Johnny Speeds     | W   | 0.967      | 0.333        | 0.118 (0.038)    | 0.507 (0.163)    | 0 (0.000) |    26.78 | chawzyyy, draken, Lekr0, Ro1f, spooke           |
|           22 |     1201 | 2024-05-13 | Verdant           | W   | 0.961      | 0.333        | 0.013 (0.004)    | 0.308 (0.099)    | 0 (0.000) |    13.27 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           21 |     1497 | 2024-04-29 | Gaimin Gladiators | W   | 0.868      | 0.384        | 0.076 (0.026)    | 0.632 (0.211)    | 0 (0.000) |    23.88 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           20 |     1601 | 2024-04-25 | HAVU              | W   | 0.840      | 0.384        | 0.002 (0.001)    | 0.222 (0.072)    | 0 (0.000) |     9.65 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           19 |     2064 | 2024-04-09 | ex-Preasy         | L   | 0.734      | -            | -                | -                | -         |    -6.78 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           18 |     2558 | 2024-03-15 | Metizport         | W   | 0.569      | 0.143        | 0.073 (0.006)    | 0.587 (0.048)    | 0 (0.000) |    13.55 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           17 |     2661 | 2024-03-12 | JANO              | W   | 0.548      | -            | -                | -                | 0 (0.000) |     5.62 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|           16 |     2673 | 2024-03-11 | CYBERSHOKE        | L   | 0.543      | -            | -                | -                | -         |   -11.48 | fen2k, FenomeN, flamie, Re1GN, sh1nejezzz       |
|           15 |     2721 | 2024-03-09 | Enterprise        | W   | 0.529      | 0.372        | 0.046 (0.009)    | 0.575 (0.113)    | -         |    11.94 | bajmi, Demho, ex1st, fr3nd, TOAO                |
|           14 |     2765 | 2024-03-07 | Endpoint          | L   | 0.516      | -            | -                | -                | -         |    -6.30 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher       |
|           13 |     2778 | 2024-03-07 | Permitta          | L   | 0.514      | -            | -                | -                | -         |    -4.86 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|           12 |     2888 | 2024-03-03 | ex-Preasy         | L   | 0.489      | -            | -                | -                | -         |    -5.80 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|           11 |     2910 | 2024-03-02 | MOUZ NXT          | L   | 0.482      | -            | -                | -                | -         |    -2.82 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|           10 |     2948 | 2024-02-28 | Aurora            | L   | 0.463      | -            | -                | -                | -         |    -0.18 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            9 |     2953 | 2024-02-28 | KOI               | L   | 0.462      | -            | -                | -                | -         |    -1.70 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            8 |     2968 | 2024-02-27 | DMS               | W   | 0.456      | -            | -                | -                | -         |     8.16 | AW, h1te, kAlash, sFade8, sm3t                  |
|            7 |     2978 | 2024-02-27 | INGLORIOUS        | W   | 0.455      | -            | -                | -                | -         |     2.57 | Drobnyy, Esphirion, Jad0R1x, LAYM, V1           |
|            6 |     2979 | 2024-02-27 | AURA              | W   | 0.455      | -            | -                | -                | -         |     2.37 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            5 |     3202 | 2024-02-17 | Aurora            | L   | 0.389      | -            | -                | -                | -         |    -0.13 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            4 |     3204 | 2024-02-17 | The Chosen Few    | W   | 0.389      | -            | -                | -                | -         |     4.10 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            3 |     3209 | 2024-02-17 | Aurora            | L   | 0.388      | -            | -                | -                | -         |    -0.12 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            2 |     4227 | 2024-01-09 | Entropiq          | L   | 0.129      | -            | -                | -                | -         |    -3.20 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            1 |     4239 | 2024-01-09 | ex-Anonymo        | W   | 0.129      | -            | -                | -                | -         |     0.87 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,935.78)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-18 |      1.000 | $6,000.00      | $6,000.00       |
| 2024-05-18 |      0.996 | $1,000.00      | $995.98         |
| 2024-05-16 |      0.980 | $3,000.00      | $2,939.80       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
