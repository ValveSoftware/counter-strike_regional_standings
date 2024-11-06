### Roster Details<br />
Team Name: BC.Game<br />
Roster: anarkez, CacaNito, GuardiaN, Lekr0, pr1metapz<br />
Global Rank: [109](../../standings_global_2024_11_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_11_06.md)<br />
Regional Rank: [76]( ../../standings_europe_2024_11_06.md)<br />
<br />
Final Rank Value:  811.7<br />
<br />
Final Rank Value (811.7) = Starting Rank Value (776.6) + Head To Head Adjustments (35.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.325[<sup>1</sup>](#table2)
- Bounty Collected: 0.314[<sup>2</sup>](#table1)
- Opponent Network: 0.129[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.192<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 776.6
- 400 + ( ( 0.192 - 0.000 ) / ( 0.815 - 0.000 ) ) * 1600 = 776.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           21 |     1567 | 2024-09-08 | K27               | L   | 0.807      | -            | -                | -                | -         |   -19.52 | anarkez, CacaNito, GuardiaN, Lekr0, pr1metapz |
|           20 |     1740 | 2024-09-03 | RUBY              | L   | 0.773      | -            | -                | -                | -         |   -14.56 | anarkez, CacaNito, KWERTZZ, Lekr0, pr1metapz  |
|           19 |     2148 | 2024-08-23 | TSM               | L   | 0.699      | -            | -                | -                | -         |    -7.05 | anarkez, CacaNito, KWERTZZ, Lekr0, pr1metapz  |
|           18 |     2174 | 2024-08-22 | GamerLegion       | L   | 0.692      | -            | -                | -                | -         |    -5.75 | anarkez, CacaNito, KWERTZZ, Lekr0, pr1metapz  |
|           17 |     2218 | 2024-08-21 | Sangal            | L   | 0.686      | -            | -                | -                | -         |    -1.03 | anarkez, CacaNito, KWERTZZ, Lekr0, pr1metapz  |
|           16 |     2240 | 2024-08-21 | ECLOT             | W   | 0.686      | 0.143        | 0.048 (0.005)    | 0.957 (0.094)    | 0 (0.000) |    17.18 | anarkez, CacaNito, KWERTZZ, Lekr0, pr1metapz  |
|           15 |     2751 | 2024-08-04 | B8                | L   | 0.574      | -            | -                | -                | -         |    -1.39 | anarkez, CacaNito, Lekr0, pr1metapz, REDSTAR  |
|           14 |     2765 | 2024-08-04 | RUSH B            | W   | 0.573      | 0.342        | 0.019 (0.004)    | 0.278 (0.054)    | 0 (0.000) |     9.23 | anarkez, CacaNito, joel, Lekr0, pr1metapz     |
|           13 |     2796 | 2024-08-03 | ARCRED            | W   | 0.567      | 0.342        | 0.037 (0.007)    | 0.356 (0.069)    | 0 (0.000) |     9.54 | anarkez, CacaNito, joel, Lekr0, pr1metapz     |
|           12 |     2830 | 2024-08-02 | SovvyKiNG         | W   | 0.560      | 0.342        | 0.001 (0.000)    | 0.404 (0.078)    | 0 (0.000) |     7.39 | anarkez, CacaNito, joel, Lekr0, pr1metapz     |
|           11 |     2869 | 2024-08-01 | Sampi             | W   | 0.553      | 0.435        | 0.025 (0.006)    | 0.593 (0.143)    | 0 (0.000) |    11.63 | anarkez, CacaNito, joel, Lekr0, pr1metapz     |
|           10 |     2963 | 2024-07-30 | EYEBALLERS        | W   | 0.540      | 0.435        | 0.008 (0.002)    | 0.518 (0.121)    | 0 (0.000) |     7.91 | anarkez, CacaNito, joel, Lekr0, pr1metapz     |
|            9 |     3015 | 2024-07-28 | Permitta          | L   | 0.528      | -            | -                | -                | -         |    -3.33 | anarkez, CacaNito, joel, Lekr0, pr1metapz     |
|            8 |     3076 | 2024-07-26 | GUN5              | W   | 0.513      | 0.435        | 0.050 (0.011)    | 1.000 (0.223)    | 0 (0.000) |    10.90 | anarkez, CacaNito, joel, Lekr0, pr1metapz     |
|            7 |     3121 | 2024-07-25 | SAW               | L   | 0.506      | -            | -                | -                | -         |    -0.20 | anarkez, CacaNito, joel, Lekr0, pr1metapz     |
|            6 |     3145 | 2024-07-24 | 1WIN              | L   | 0.501      | -            | -                | -                | -         |    -9.40 | anarkez, CacaNito, joel, Lekr0, pr1metapz     |
|            5 |     3190 | 2024-07-23 | GUN5              | W   | 0.493      | 0.435        | 0.050 (0.011)    | 1.000 (0.214)    | 0 (0.000) |    10.86 | anarkez, CacaNito, joel, Lekr0, pr1metapz     |
|            4 |     3220 | 2024-07-22 | Passion UA        | L   | 0.486      | -            | -                | -                | -         |    -2.87 | anarkez, CacaNito, joel, Lekr0, pr1metapz     |
|            3 |     3265 | 2024-07-20 | Aurora Young Blud | L   | 0.474      | -            | -                | -                | -         |    -5.79 | anarkez, CacaNito, joel, Lekr0, pr1metapz     |
|            2 |     3368 | 2024-07-18 | Metizport         | W   | 0.460      | 0.435        | 0.014 (0.003)    | 0.509 (0.102)    | 0 (0.000) |     9.08 | anarkez, CacaNito, joel, Lekr0, pr1metapz     |
|            1 |     3497 | 2024-07-16 | SINNERS           | W   | 0.445      | 0.435        | 0.090 (0.017)    | 0.974 (0.188)    | 0 (0.000) |    12.24 | anarkez, CacaNito, joel, Lekr0, pr1metapz     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,009.05)
- Divide that value by the 5th highest value among all rosters ($478,523.89)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
