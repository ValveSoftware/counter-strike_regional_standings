### Roster Details<br />
Team Name: BC.Game<br />
Roster: anarkez, CacaNito, KWERTZZ, Lekr0, pr1metapz<br />
Global Rank: [75](../../standings_global_2024_08_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_08_28.md)<br />
Regional Rank: [55]( ../../standings_europe_2024_08_28.md)<br />
<br />
Final Rank Value:  950.4<br />
<br />
Final Rank Value (950.4) = Starting Rank Value (882.8) + Head To Head Adjustments (67.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.382[<sup>1</sup>](#table2)
- Bounty Collected: 0.360[<sup>2</sup>](#table1)
- Opponent Network: 0.233[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.244<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 882.8
- 400 + ( ( 0.244 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 882.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |      248 | 2024-08-23 | TSM               | L   | 1.000      | -            | -                | -                | -         |   -11.02 | anarkez, CacaNito, KWERTZZ, Lekr0, pr1metapz |
|           18 |      274 | 2024-08-22 | GamerLegion       | L   | 1.000      | -            | -                | -                | -         |    -9.52 | anarkez, CacaNito, KWERTZZ, Lekr0, pr1metapz |
|           17 |      318 | 2024-08-21 | Sangal            | L   | 1.000      | -            | -                | -                | -         |    -4.46 | anarkez, CacaNito, KWERTZZ, Lekr0, pr1metapz |
|           16 |      340 | 2024-08-21 | ECLOT             | W   | 1.000      | 0.143        | 0.074 (0.011)    | 0.666 (0.095)    | 0 (0.000) |    16.75 | anarkez, CacaNito, KWERTZZ, Lekr0, pr1metapz |
|           15 |      851 | 2024-08-04 | B8                | L   | 1.000      | -            | -                | -                | -         |    -8.49 | anarkez, CacaNito, Lekr0, pr1metapz, REDSTAR |
|           14 |      865 | 2024-08-04 | RUSH B            | W   | 1.000      | 0.342        | 0.025 (0.009)    | 0.322 (0.110)    | 0 (0.000) |    15.46 | anarkez, CacaNito, joel, Lekr0, pr1metapz    |
|           13 |      896 | 2024-08-03 | ARCRED            | W   | 1.000      | 0.342        | 0.038 (0.013)    | 0.401 (0.137)    | 0 (0.000) |    16.27 | anarkez, CacaNito, joel, Lekr0, pr1metapz    |
|           12 |      930 | 2024-08-02 | Space             | W   | 1.000      | 0.342        | 0.005 (0.002)    | 0.421 (0.144)    | 0 (0.000) |    11.29 | anarkez, CacaNito, joel, Lekr0, pr1metapz    |
|           11 |      969 | 2024-08-01 | Sampi             | W   | 1.000      | 0.435        | 0.021 (0.009)    | 1.000 (0.435)    | 0 (0.000) |    14.10 | anarkez, CacaNito, joel, Lekr0, pr1metapz    |
|           10 |     1063 | 2024-07-30 | EYEBALLERS        | W   | 1.000      | 0.435        | 0.004 (0.002)    | 0.553 (0.240)    | 0 (0.000) |    11.03 | anarkez, CacaNito, joel, Lekr0, pr1metapz    |
|            9 |     1115 | 2024-07-28 | Permitta          | L   | 0.995      | -            | -                | -                | -         |   -15.24 | anarkez, CacaNito, joel, Lekr0, pr1metapz    |
|            8 |     1176 | 2024-07-26 | GUN5              | W   | 0.980      | 0.435        | 0.091 (0.039)    | 0.698 (0.297)    | 0 (0.000) |    15.73 | anarkez, CacaNito, joel, Lekr0, pr1metapz    |
|            7 |     1221 | 2024-07-25 | SAW               | L   | 0.972      | -            | -                | -                | -         |    -1.56 | anarkez, CacaNito, joel, Lekr0, pr1metapz    |
|            6 |     1245 | 2024-07-24 | 1WIN              | L   | 0.967      | -            | -                | -                | -         |   -13.42 | anarkez, CacaNito, joel, Lekr0, pr1metapz    |
|            5 |     1290 | 2024-07-23 | GUN5              | W   | 0.960      | 0.435        | 0.091 (0.038)    | 0.698 (0.291)    | 0 (0.000) |    16.80 | anarkez, CacaNito, joel, Lekr0, pr1metapz    |
|            4 |     1320 | 2024-07-22 | Passion UA        | L   | 0.952      | -            | -                | -                | -         |    -7.02 | anarkez, CacaNito, joel, Lekr0, pr1metapz    |
|            3 |     1365 | 2024-07-20 | Aurora Young Blud | L   | 0.941      | -            | -                | -                | -         |   -13.04 | anarkez, CacaNito, joel, Lekr0, pr1metapz    |
|            2 |     1468 | 2024-07-18 | Metizport         | W   | 0.926      | 0.435        | 0.020 (0.008)    | 0.446 (0.180)    | 0 (0.000) |    14.73 | anarkez, CacaNito, joel, Lekr0, pr1metapz    |
|            1 |     1597 | 2024-07-16 | SINNERS           | W   | 0.911      | 0.435        | 0.094 (0.037)    | 1.000 (0.396)    | 0 (0.000) |    19.15 | anarkez, CacaNito, joel, Lekr0, pr1metapz    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,000.00)
- Divide that value by the 5th highest value among all rosters ($290,989.03)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
