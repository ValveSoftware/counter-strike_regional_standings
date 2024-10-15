### Roster Details<br />
Team Name: BC.Game<br />
Roster: anarkez, CacaNito, GuardiaN, Lekr0, pr1metapz<br />
Global Rank: [100](../../standings_global_2024_10_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_15.md)<br />
Regional Rank: [71]( ../../standings_europe_2024_10_15.md)<br />
<br />
Final Rank Value:  850.5<br />
<br />
Final Rank Value (850.5) = Starting Rank Value (823.3) + Head To Head Adjustments (27.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.359[<sup>1</sup>](#table2)
- Bounty Collected: 0.351[<sup>2</sup>](#table1)
- Opponent Network: 0.162[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.218<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 823.3
- 400 + ( ( 0.218 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 823.3


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
|           21 |     1118 | 2024-09-08 | K27               | L   | 0.954      | -            | -                | -                | -         |   -23.60 | anarkez, CacaNito, GuardiaN, Lekr0, pr1metapz |
|           20 |     1291 | 2024-09-03 | RUBY              | L   | 0.920      | -            | -                | -                | -         |   -17.14 | anarkez, CacaNito, KWERTZZ, Lekr0, pr1metapz  |
|           19 |     1699 | 2024-08-23 | TSM               | L   | 0.845      | -            | -                | -                | -         |    -8.99 | anarkez, CacaNito, KWERTZZ, Lekr0, pr1metapz  |
|           18 |     1725 | 2024-08-22 | GamerLegion       | L   | 0.839      | -            | -                | -                | -         |    -6.53 | anarkez, CacaNito, KWERTZZ, Lekr0, pr1metapz  |
|           17 |     1769 | 2024-08-21 | Sangal            | L   | 0.833      | -            | -                | -                | -         |    -2.82 | anarkez, CacaNito, KWERTZZ, Lekr0, pr1metapz  |
|           16 |     1791 | 2024-08-21 | ECLOT             | W   | 0.833      | 0.143        | 0.089 (0.011)    | 0.744 (0.089)    | 0 (0.000) |    18.82 | anarkez, CacaNito, KWERTZZ, Lekr0, pr1metapz  |
|           15 |     2302 | 2024-08-04 | B8                | L   | 0.721      | -            | -                | -                | -         |    -5.74 | anarkez, CacaNito, Lekr0, pr1metapz, REDSTAR  |
|           14 |     2316 | 2024-08-04 | RUSH B            | W   | 0.720      | 0.342        | 0.018 (0.004)    | 0.205 (0.050)    | 0 (0.000) |    10.78 | anarkez, CacaNito, joel, Lekr0, pr1metapz     |
|           13 |     2347 | 2024-08-03 | ARCRED            | W   | 0.714      | 0.342        | 0.023 (0.006)    | 0.333 (0.081)    | 0 (0.000) |    11.04 | anarkez, CacaNito, joel, Lekr0, pr1metapz     |
|           12 |     2381 | 2024-08-02 | Space             | W   | 0.707      | 0.342        | 0.002 (0.001)    | 0.439 (0.106)    | 0 (0.000) |     8.61 | anarkez, CacaNito, joel, Lekr0, pr1metapz     |
|           11 |     2420 | 2024-08-01 | Sampi             | W   | 0.700      | 0.435        | 0.046 (0.014)    | 0.677 (0.206)    | 0 (0.000) |    13.17 | anarkez, CacaNito, joel, Lekr0, pr1metapz     |
|           10 |     2514 | 2024-07-30 | EYEBALLERS        | W   | 0.687      | 0.435        | 0.006 (0.002)    | 0.474 (0.142)    | 0 (0.000) |     9.26 | anarkez, CacaNito, joel, Lekr0, pr1metapz     |
|            9 |     2566 | 2024-07-28 | Permitta          | L   | 0.675      | -            | -                | -                | -         |    -8.73 | anarkez, CacaNito, joel, Lekr0, pr1metapz     |
|            8 |     2627 | 2024-07-26 | GUN5              | W   | 0.660      | 0.435        | 0.096 (0.028)    | 1.000 (0.287)    | 0 (0.000) |    13.13 | anarkez, CacaNito, joel, Lekr0, pr1metapz     |
|            7 |     2672 | 2024-07-25 | SAW               | L   | 0.653      | -            | -                | -                | -         |    -0.97 | anarkez, CacaNito, joel, Lekr0, pr1metapz     |
|            6 |     2696 | 2024-07-24 | 1WIN              | L   | 0.648      | -            | -                | -                | -         |   -11.16 | anarkez, CacaNito, joel, Lekr0, pr1metapz     |
|            5 |     2741 | 2024-07-23 | GUN5              | W   | 0.640      | 0.435        | 0.096 (0.027)    | 1.000 (0.278)    | 0 (0.000) |    13.38 | anarkez, CacaNito, joel, Lekr0, pr1metapz     |
|            4 |     2771 | 2024-07-22 | Passion UA        | L   | 0.633      | -            | -                | -                | -         |    -4.00 | anarkez, CacaNito, joel, Lekr0, pr1metapz     |
|            3 |     2816 | 2024-07-20 | Aurora Young Blud | L   | 0.621      | -            | -                | -                | -         |    -8.50 | anarkez, CacaNito, joel, Lekr0, pr1metapz     |
|            2 |     2919 | 2024-07-18 | Metizport         | W   | 0.607      | 0.435        | 0.025 (0.007)    | 0.476 (0.125)    | 0 (0.000) |    11.29 | anarkez, CacaNito, joel, Lekr0, pr1metapz     |
|            1 |     3048 | 2024-07-16 | SINNERS           | W   | 0.592      | 0.435        | 0.165 (0.042)    | 1.000 (0.257)    | 0 (0.000) |    15.90 | anarkez, CacaNito, joel, Lekr0, pr1metapz     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,037.82)
- Divide that value by the 5th highest value among all rosters ($308,815.62)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
