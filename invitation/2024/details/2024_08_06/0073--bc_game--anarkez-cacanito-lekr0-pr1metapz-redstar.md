### Roster Details<br />
Team Name: BC.Game<br />
Roster: anarkez, CacaNito, Lekr0, pr1metapz, REDSTAR<br />
Global Rank: [73](../../standings_global_2024_08_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_08_06.md)<br />
Regional Rank: [51]( ../../standings_europe_2024_08_06.md)<br />
<br />
Final Rank Value:  961.0<br />
<br />
Final Rank Value (961.0) = Starting Rank Value (880.8) + Head To Head Adjustments (80.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.376[<sup>1</sup>](#table2)
- Bounty Collected: 0.350[<sup>2</sup>](#table1)
- Opponent Network: 0.209[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.234<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 880.8
- 400 + ( ( 0.234 - 0.000 ) / ( 0.778 - 0.000 ) ) * 1600 = 880.8


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
|           15 |       56 | 2024-08-04 | B8                | L   | 1.000      | -            | -                | -                | -         |    -7.34 | anarkez, CacaNito, Lekr0, pr1metapz, REDSTAR |
|           14 |       70 | 2024-08-04 | RUSH B            | W   | 1.000      | 0.342        | 0.026 (0.009)    | 0.371 (0.127)    | 0 (0.000) |    15.58 | anarkez, CacaNito, joel, Lekr0, pr1metapz    |
|           13 |      101 | 2024-08-03 | ARCRED            | W   | 1.000      | 0.342        | 0.041 (0.014)    | 0.369 (0.126)    | 0 (0.000) |    17.34 | anarkez, CacaNito, joel, Lekr0, pr1metapz    |
|           12 |      135 | 2024-08-02 | Space             | W   | 1.000      | 0.342        | 0.006 (0.002)    | 0.429 (0.147)    | 0 (0.000) |    12.43 | anarkez, CacaNito, joel, Lekr0, pr1metapz    |
|           11 |      174 | 2024-08-01 | Sampi             | W   | 1.000      | 0.435        | 0.027 (0.012)    | 1.000 (0.435)    | 0 (0.000) |    14.26 | anarkez, CacaNito, joel, Lekr0, pr1metapz    |
|           10 |      268 | 2024-07-30 | EYEBALLERS        | W   | 1.000      | 0.435        | 0.005 (0.002)    | 0.488 (0.212)    | 0 (0.000) |    11.38 | anarkez, CacaNito, joel, Lekr0, pr1metapz    |
|            9 |      320 | 2024-07-28 | Permitta          | L   | 1.000      | -            | -                | -                | -         |   -14.76 | anarkez, CacaNito, joel, Lekr0, pr1metapz    |
|            8 |      381 | 2024-07-26 | GUN5              | W   | 1.000      | 0.435        | 0.072 (0.031)    | 0.550 (0.239)    | 0 (0.000) |    15.29 | anarkez, CacaNito, joel, Lekr0, pr1metapz    |
|            7 |      426 | 2024-07-25 | SAW               | L   | 1.000      | -            | -                | -                | -         |    -5.49 | anarkez, CacaNito, joel, Lekr0, pr1metapz    |
|            6 |      450 | 2024-07-24 | 1WIN              | L   | 1.000      | -            | -                | -                | -         |   -12.48 | anarkez, CacaNito, joel, Lekr0, pr1metapz    |
|            5 |      495 | 2024-07-23 | GUN5              | W   | 1.000      | 0.435        | 0.072 (0.031)    | 0.550 (0.239)    | 0 (0.000) |    16.59 | anarkez, CacaNito, joel, Lekr0, pr1metapz    |
|            4 |      525 | 2024-07-22 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |    -7.00 | anarkez, CacaNito, joel, Lekr0, pr1metapz    |
|            3 |      570 | 2024-07-20 | Aurora Young Blud | L   | 1.000      | -            | -                | -                | -         |   -13.81 | anarkez, CacaNito, joel, Lekr0, pr1metapz    |
|            2 |      673 | 2024-07-18 | Metizport         | W   | 1.000      | 0.435        | 0.036 (0.016)    | 0.510 (0.222)    | 0 (0.000) |    18.39 | anarkez, CacaNito, joel, Lekr0, pr1metapz    |
|            1 |      802 | 2024-07-16 | SINNERS           | W   | 1.000      | 0.435        | 0.047 (0.020)    | 0.800 (0.348)    | 0 (0.000) |    19.80 | anarkez, CacaNito, joel, Lekr0, pr1metapz    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,000.00)
- Divide that value by the 5th highest value among all rosters ($320,194.86)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
