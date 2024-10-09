### Roster Details<br />
Team Name: BC.Game<br />
Roster: anarkez, CacaNito, GuardiaN, Lekr0, pr1metapz<br />
Global Rank: [99](../../standings_global_2024_10_09.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_09.md)<br />
Regional Rank: [70]( ../../standings_europe_2024_10_09.md)<br />
<br />
Final Rank Value:  856.8<br />
<br />
Final Rank Value (856.8) = Starting Rank Value (829.4) + Head To Head Adjustments (27.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.363[<sup>1</sup>](#table2)
- Bounty Collected: 0.353[<sup>2</sup>](#table1)
- Opponent Network: 0.173[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.222<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 829.4
- 400 + ( ( 0.222 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 829.4


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
|           21 |     1021 | 2024-09-08 | K27               | L   | 0.993      | -            | -                | -                | -         |   -24.58 | anarkez, CacaNito, GuardiaN, Lekr0, pr1metapz |
|           20 |     1194 | 2024-09-03 | RUBY              | L   | 0.959      | -            | -                | -                | -         |   -17.92 | anarkez, CacaNito, KWERTZZ, Lekr0, pr1metapz  |
|           19 |     1602 | 2024-08-23 | TSM               | L   | 0.885      | -            | -                | -                | -         |    -9.33 | anarkez, CacaNito, KWERTZZ, Lekr0, pr1metapz  |
|           18 |     1628 | 2024-08-22 | GamerLegion       | L   | 0.879      | -            | -                | -                | -         |    -6.78 | anarkez, CacaNito, KWERTZZ, Lekr0, pr1metapz  |
|           17 |     1672 | 2024-08-21 | Sangal            | L   | 0.873      | -            | -                | -                | -         |    -2.91 | anarkez, CacaNito, KWERTZZ, Lekr0, pr1metapz  |
|           16 |     1694 | 2024-08-21 | ECLOT             | W   | 0.872      | 0.143        | 0.095 (0.012)    | 0.728 (0.091)    | 0 (0.000) |    19.29 | anarkez, CacaNito, KWERTZZ, Lekr0, pr1metapz  |
|           15 |     2205 | 2024-08-04 | B8                | L   | 0.761      | -            | -                | -                | -         |    -5.93 | anarkez, CacaNito, Lekr0, pr1metapz, REDSTAR  |
|           14 |     2219 | 2024-08-04 | RUSH B            | W   | 0.759      | 0.342        | 0.019 (0.005)    | 0.216 (0.056)    | 0 (0.000) |    11.44 | anarkez, CacaNito, joel, Lekr0, pr1metapz     |
|           13 |     2250 | 2024-08-03 | ARCRED            | W   | 0.753      | 0.342        | 0.026 (0.007)    | 0.348 (0.090)    | 0 (0.000) |    11.70 | anarkez, CacaNito, joel, Lekr0, pr1metapz     |
|           12 |     2284 | 2024-08-02 | Space             | W   | 0.747      | 0.342        | 0.003 (0.001)    | 0.425 (0.109)    | 0 (0.000) |     8.94 | anarkez, CacaNito, joel, Lekr0, pr1metapz     |
|           11 |     2323 | 2024-08-01 | Sampi             | W   | 0.740      | 0.435        | 0.049 (0.016)    | 0.716 (0.230)    | 0 (0.000) |    13.84 | anarkez, CacaNito, joel, Lekr0, pr1metapz     |
|           10 |     2417 | 2024-07-30 | EYEBALLERS        | W   | 0.726      | 0.435        | 0.007 (0.002)    | 0.482 (0.152)    | 0 (0.000) |     9.72 | anarkez, CacaNito, joel, Lekr0, pr1metapz     |
|            9 |     2469 | 2024-07-28 | Permitta          | L   | 0.715      | -            | -                | -                | -         |    -9.42 | anarkez, CacaNito, joel, Lekr0, pr1metapz     |
|            8 |     2530 | 2024-07-26 | GUN5              | W   | 0.700      | 0.435        | 0.096 (0.029)    | 1.000 (0.304)    | 0 (0.000) |    13.39 | anarkez, CacaNito, joel, Lekr0, pr1metapz     |
|            7 |     2575 | 2024-07-25 | SAW               | L   | 0.693      | -            | -                | -                | -         |    -0.99 | anarkez, CacaNito, joel, Lekr0, pr1metapz     |
|            6 |     2599 | 2024-07-24 | 1WIN              | L   | 0.687      | -            | -                | -                | -         |   -11.40 | anarkez, CacaNito, joel, Lekr0, pr1metapz     |
|            5 |     2644 | 2024-07-23 | GUN5              | W   | 0.680      | 0.435        | 0.096 (0.028)    | 1.000 (0.295)    | 0 (0.000) |    13.72 | anarkez, CacaNito, joel, Lekr0, pr1metapz     |
|            4 |     2674 | 2024-07-22 | Passion UA        | L   | 0.672      | -            | -                | -                | -         |    -4.26 | anarkez, CacaNito, joel, Lekr0, pr1metapz     |
|            3 |     2719 | 2024-07-20 | Aurora Young Blud | L   | 0.661      | -            | -                | -                | -         |    -9.16 | anarkez, CacaNito, joel, Lekr0, pr1metapz     |
|            2 |     2822 | 2024-07-18 | Metizport         | W   | 0.646      | 0.435        | 0.019 (0.005)    | 0.454 (0.128)    | 0 (0.000) |    11.49 | anarkez, CacaNito, joel, Lekr0, pr1metapz     |
|            1 |     2951 | 2024-07-16 | SINNERS           | W   | 0.632      | 0.435        | 0.156 (0.043)    | 1.000 (0.275)    | 0 (0.000) |    16.49 | anarkez, CacaNito, joel, Lekr0, pr1metapz     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,315.17)
- Divide that value by the 5th highest value among all rosters ($304,769.86)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
