### Roster Details<br />
Team Name: BC.Game<br />
Roster: anarkez, CacaNito, Lekr0, pr1metapz, REDSTAR<br />
Global Rank: [77](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [56]( ../standings_europe.md)<br />
<br />
Final Rank Value:  940.4<br />
<br />
Final Rank Value (940.4) = Starting Rank Value (859.9) + Head To Head Adjustments (80.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.376[<sup>1</sup>](#table2)
- Bounty Collected: 0.340[<sup>2</sup>](#table1)
- Opponent Network: 0.216[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.233<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 859.9
- 400 + ( ( 0.233 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 859.9


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
|           15 |      329 | 2024-08-04 | B8                | L   | 1.000      | -            | -                | -                | -         |    -7.65 | anarkez, CacaNito, Lekr0, pr1metapz, REDSTAR |
|           14 |      343 | 2024-08-04 | RUSH B            | W   | 1.000      | 0.342        | 0.025 (0.008)    | 0.377 (0.129)    | 0 (0.000) |    16.13 | anarkez, CacaNito, joel, Lekr0, pr1metapz    |
|           13 |      374 | 2024-08-03 | ARCRED            | W   | 1.000      | 0.342        | 0.039 (0.013)    | 0.425 (0.146)    | 0 (0.000) |    17.30 | anarkez, CacaNito, joel, Lekr0, pr1metapz    |
|           12 |      408 | 2024-08-02 | Space             | W   | 1.000      | 0.342        | 0.005 (0.002)    | 0.445 (0.152)    | 0 (0.000) |    12.06 | anarkez, CacaNito, joel, Lekr0, pr1metapz    |
|           11 |      447 | 2024-08-01 | Sampi             | W   | 1.000      | 0.435        | 0.024 (0.010)    | 0.981 (0.426)    | 0 (0.000) |    14.22 | anarkez, CacaNito, joel, Lekr0, pr1metapz    |
|           10 |      541 | 2024-07-30 | EYEBALLERS        | W   | 1.000      | 0.435        | 0.005 (0.002)    | 0.614 (0.267)    | 0 (0.000) |    11.56 | anarkez, CacaNito, joel, Lekr0, pr1metapz    |
|            9 |      593 | 2024-07-28 | Permitta          | L   | 1.000      | -            | -                | -                | -         |   -14.82 | anarkez, CacaNito, joel, Lekr0, pr1metapz    |
|            8 |      654 | 2024-07-26 | GUN5              | W   | 1.000      | 0.435        | 0.067 (0.029)    | 0.528 (0.229)    | 0 (0.000) |    15.38 | anarkez, CacaNito, joel, Lekr0, pr1metapz    |
|            7 |      699 | 2024-07-25 | SAW               | L   | 1.000      | -            | -                | -                | -         |    -2.29 | anarkez, CacaNito, joel, Lekr0, pr1metapz    |
|            6 |      723 | 2024-07-24 | 1WIN              | L   | 1.000      | -            | -                | -                | -         |   -12.47 | anarkez, CacaNito, joel, Lekr0, pr1metapz    |
|            5 |      768 | 2024-07-23 | GUN5              | W   | 1.000      | 0.435        | 0.067 (0.029)    | 0.528 (0.229)    | 0 (0.000) |    16.81 | anarkez, CacaNito, joel, Lekr0, pr1metapz    |
|            4 |      798 | 2024-07-22 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |    -6.78 | anarkez, CacaNito, joel, Lekr0, pr1metapz    |
|            3 |      843 | 2024-07-20 | Aurora Young Blud | L   | 1.000      | -            | -                | -                | -         |   -13.19 | anarkez, CacaNito, joel, Lekr0, pr1metapz    |
|            2 |      946 | 2024-07-18 | Metizport         | W   | 1.000      | 0.435        | 0.004 (0.002)    | 0.414 (0.180)    | 0 (0.000) |    14.02 | anarkez, CacaNito, joel, Lekr0, pr1metapz    |
|            1 |     1075 | 2024-07-16 | SINNERS           | W   | 1.000      | 0.435        | 0.044 (0.019)    | 0.922 (0.401)    | 0 (0.000) |    20.29 | anarkez, CacaNito, joel, Lekr0, pr1metapz    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,000.00)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
