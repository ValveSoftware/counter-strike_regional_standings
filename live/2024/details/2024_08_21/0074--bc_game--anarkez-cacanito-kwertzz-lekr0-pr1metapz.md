### Roster Details<br />
Team Name: BC.Game<br />
Roster: anarkez, CacaNito, KWERTZZ, Lekr0, pr1metapz<br />
Global Rank: [74](../../standings_global_2024_08_21.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_08_21.md)<br />
Regional Rank: [53]( ../../standings_europe_2024_08_21.md)<br />
<br />
Final Rank Value:  960.6<br />
<br />
Final Rank Value (960.6) = Starting Rank Value (869.3) + Head To Head Adjustments (91.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.378[<sup>1</sup>](#table2)
- Bounty Collected: 0.349[<sup>2</sup>](#table1)
- Opponent Network: 0.219[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.236<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 869.3
- 400 + ( ( 0.236 - 0.000 ) / ( 0.806 - 0.000 ) ) * 1600 = 869.3


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
|           17 |       23 | 2024-08-21 | Sangal            | L   | 1.000      | -            | -                | -                | -         |    -4.13 | anarkez, CacaNito, KWERTZZ, Lekr0, pr1metapz |
|           16 |       45 | 2024-08-21 | ECLOT             | W   | 1.000      | 0.143        | 0.075 (0.011)    | 0.513 (0.073)    | 0 (0.000) |    17.19 | anarkez, CacaNito, KWERTZZ, Lekr0, pr1metapz |
|           15 |      556 | 2024-08-04 | B8                | L   | 1.000      | -            | -                | -                | -         |    -7.94 | anarkez, CacaNito, Lekr0, pr1metapz, REDSTAR |
|           14 |      570 | 2024-08-04 | RUSH B            | W   | 1.000      | 0.342        | 0.025 (0.008)    | 0.340 (0.117)    | 0 (0.000) |    16.22 | anarkez, CacaNito, joel, Lekr0, pr1metapz    |
|           13 |      601 | 2024-08-03 | ARCRED            | W   | 1.000      | 0.342        | 0.038 (0.013)    | 0.420 (0.144)    | 0 (0.000) |    16.98 | anarkez, CacaNito, joel, Lekr0, pr1metapz    |
|           12 |      635 | 2024-08-02 | Space             | W   | 1.000      | 0.342        | 0.005 (0.002)    | 0.409 (0.140)    | 0 (0.000) |    11.64 | anarkez, CacaNito, joel, Lekr0, pr1metapz    |
|           11 |      674 | 2024-08-01 | Sampi             | W   | 1.000      | 0.435        | 0.022 (0.010)    | 0.889 (0.386)    | 0 (0.000) |    14.09 | anarkez, CacaNito, joel, Lekr0, pr1metapz    |
|           10 |      768 | 2024-07-30 | EYEBALLERS        | W   | 1.000      | 0.435        | 0.005 (0.002)    | 0.550 (0.239)    | 0 (0.000) |    11.38 | anarkez, CacaNito, joel, Lekr0, pr1metapz    |
|            9 |      820 | 2024-07-28 | Permitta          | L   | 1.000      | -            | -                | -                | -         |   -15.06 | anarkez, CacaNito, joel, Lekr0, pr1metapz    |
|            8 |      881 | 2024-07-26 | GUN5              | W   | 1.000      | 0.435        | 0.066 (0.029)    | 0.586 (0.255)    | 0 (0.000) |    15.34 | anarkez, CacaNito, joel, Lekr0, pr1metapz    |
|            7 |      926 | 2024-07-25 | SAW               | L   | 1.000      | -            | -                | -                | -         |    -1.34 | anarkez, CacaNito, joel, Lekr0, pr1metapz    |
|            6 |      950 | 2024-07-24 | 1WIN              | L   | 1.000      | -            | -                | -                | -         |   -13.05 | anarkez, CacaNito, joel, Lekr0, pr1metapz    |
|            5 |      995 | 2024-07-23 | GUN5              | W   | 1.000      | 0.435        | 0.066 (0.029)    | 0.586 (0.255)    | 0 (0.000) |    16.75 | anarkez, CacaNito, joel, Lekr0, pr1metapz    |
|            4 |     1025 | 2024-07-22 | Passion UA        | L   | 0.998      | -            | -                | -                | -         |    -6.83 | anarkez, CacaNito, joel, Lekr0, pr1metapz    |
|            3 |     1070 | 2024-07-20 | Aurora Young Blud | L   | 0.986      | -            | -                | -                | -         |   -13.16 | anarkez, CacaNito, joel, Lekr0, pr1metapz    |
|            2 |     1173 | 2024-07-18 | Metizport         | W   | 0.972      | 0.435        | 0.003 (0.001)    | 0.384 (0.162)    | 0 (0.000) |    13.05 | anarkez, CacaNito, joel, Lekr0, pr1metapz    |
|            1 |     1302 | 2024-07-16 | SINNERS           | W   | 0.957      | 0.435        | 0.075 (0.031)    | 1.000 (0.416)    | 0 (0.000) |    20.17 | anarkez, CacaNito, joel, Lekr0, pr1metapz    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,000.00)
- Divide that value by the 5th highest value among all rosters ($307,820.64)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
