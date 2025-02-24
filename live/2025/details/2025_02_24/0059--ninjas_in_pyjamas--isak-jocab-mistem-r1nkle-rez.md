### Roster Details<br />
Team Name: Ninjas in Pyjamas<br />
Roster: isak, jocab, MisteM, r1nkle, REZ<br />
Global Rank: [59](../../standings_global_2025_02_24.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_24.md)<br />
Regional Rank: [43]( ../../standings_europe_2025_02_24.md)<br />
<br />
Final Rank Value:  898.6<br />
<br />
Final Rank Value (898.6) = Starting Rank Value (876.6) + Head To Head Adjustments (21.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.385[<sup>1</sup>](#table2)
- Bounty Collected: 0.311[<sup>2</sup>](#table1)
- Opponent Network: 0.048[<sup>2</sup>](#table1)
- LAN Wins: 0.257[<sup>2</sup>](#table1)

The average of these factors is 0.250<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 876.6
- 400 + ( ( 0.250 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 876.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           22 |     1218 | 2024-11-24 | Spirit        | L   | 0.584      | -            | -                | -                | -         |    -0.05 | isak, jocab, MisteM, r1nkle, REZ |
|           21 |     1225 | 2024-11-23 | 9 Pandas      | W   | 0.582      | 0.143        | 0.081 (0.007)    | 0.663 (0.055)    | 1 (0.582) |    12.77 | isak, jocab, MisteM, r1nkle, REZ |
|           20 |     1253 | 2024-11-23 | TSM           | W   | 0.576      | 0.143        | 0.009 (0.001)    | 0.186 (0.015)    | 1 (0.576) |     5.47 | isak, jocab, MisteM, r1nkle, REZ |
|           19 |     1285 | 2024-11-21 | Falcons       | L   | 0.569      | -            | -                | -                | -         |    -0.08 | isak, jocab, MisteM, r1nkle, REZ |
|           18 |     1301 | 2024-11-21 | PARIVISION    | W   | 0.564      | 0.143        | 0.006 (0.001)    | 0.088 (0.007)    | 1 (0.564) |     5.52 | isak, jocab, MisteM, r1nkle, REZ |
|           17 |     1313 | 2024-11-20 | G2            | L   | 0.562      | -            | -                | -                | -         |    -0.09 | isak, jocab, MisteM, r1nkle, REZ |
|           16 |     1515 | 2024-11-12 | BetBoom       | L   | 0.504      | -            | -                | -                | -         |    -5.78 | isak, jocab, MisteM, r1nkle, REZ |
|           15 |     1547 | 2024-11-11 | Zero Tenacity | W   | 0.499      | 0.384        | 0.027 (0.005)    | 0.657 (0.126)    | 0 (0.000) |     7.94 | isak, jocab, MisteM, r1nkle, REZ |
|           14 |     1588 | 2024-11-09 | Metizport     | L   | 0.486      | -            | -                | -                | -         |    -4.02 | isak, jocab, MisteM, r1nkle, REZ |
|           13 |     1610 | 2024-11-08 | Alliance      | W   | 0.479      | 0.432        | 0.015 (0.003)    | 0.522 (0.108)    | 1 (0.479) |     7.47 | isak, jocab, MisteM, r1nkle, REZ |
|           12 |     1895 | 2024-10-25 | Imperial      | L   | 0.385      | -            | -                | -                | -         |    -4.30 | isak, jocab, MisteM, r1nkle, REZ |
|           11 |     1923 | 2024-10-23 | Falcons       | L   | 0.373      | -            | -                | -                | -         |    -0.04 | isak, jocab, MisteM, r1nkle, REZ |
|           10 |     1925 | 2024-10-23 | Imperial      | W   | 0.372      | 0.477        | 0.083 (0.015)    | 0.795 (0.141)    | 0 (0.000) |     7.66 | isak, jocab, MisteM, r1nkle, REZ |
|            9 |     2070 | 2024-10-16 | JANO          | L   | 0.326      | -            | -                | -                | -         |    -5.46 | isak, jocab, MisteM, r1nkle, REZ |
|            8 |     2083 | 2024-10-16 | B8            | L   | 0.324      | -            | -                | -                | -         |    -2.17 | isak, jocab, MisteM, r1nkle, REZ |
|            7 |     2385 | 2024-10-04 | ECSTATIC      | L   | 0.244      | -            | -                | -                | -         |    -3.92 | isak, jocab, MisteM, r1nkle, REZ |
|            6 |     3302 | 2024-09-07 | Falcons       | L   | 0.065      | -            | -                | -                | -         |    -0.01 | alex, isak, maxster, r1nkle, REZ |
|            5 |     3353 | 2024-09-05 | FaZe          | L   | 0.053      | -            | -                | -                | -         |    -0.01 | alex, isak, maxster, r1nkle, REZ |
|            4 |     3403 | 2024-09-04 | Natus Vincere | L   | 0.046      | -            | -                | -                | -         |    -0.01 | alex, isak, maxster, r1nkle, REZ |
|            3 |     3439 | 2024-09-03 | Falcons       | W   | 0.039      | 0.889        | 0.865 (0.030)    | 0.811 (0.028)    | 1 (0.039) |     1.21 | alex, isak, maxster, r1nkle, REZ |
|            2 |     3548 | 2024-08-29 | Monte         | L   | 0.006      | -            | -                | -                | -         |    -0.11 | alex, isak, maxster, r1nkle, REZ |
|            1 |     3559 | 2024-08-29 | GUN5          | L   | 0.005      | -            | -                | -                | -         |    -0.07 | alex, isak, maxster, r1nkle, REZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,337.20)
- Divide that value by the 5th highest value among all rosters ($371,464.45)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-12 |      0.505 | $1,500.00      | $757.91         |
| 2024-11-09 |      0.486 | $11,635.00     | $5,652.81       |
| 2024-10-20 |      0.353 | $5,000.00      | $1,762.81       |
| 2024-09-22 |      0.166 | $7,000.00      | $1,163.68       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
