### Roster Details<br />
Team Name: BC.Game<br />
Roster: anarkez, CacaNito, joel, Lekr0, pr1metapz<br />
Global Rank: [145](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [96]( ../standings_europe.md)<br />
<br />
Final Rank Value:  727.1<br />
<br />
Final Rank Value (727.1) = Starting Rank Value (632.5) + Head To Head Adjustments (94.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.333[<sup>2</sup>](#table1)
- Opponent Network: 0.117[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.113<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 632.5
- 400 + ( ( 0.113 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 632.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |       60 | 2024-07-30 | EYEBALLERS        | W   | 1.000      | 0.435        | 0.006 (0.002)    | 0.513 (0.223)    | 0 (0.000) |    19.14 | anarkez, CacaNito, joel, Lekr0, pr1metapz |
|            9 |      112 | 2024-07-28 | Permitta          | L   | 1.000      | -            | -                | -                | -         |    -7.83 | anarkez, CacaNito, joel, Lekr0, pr1metapz |
|            8 |      173 | 2024-07-26 | GUN5              | W   | 1.000      | 0.435        | 0.074 (0.032)    | 0.516 (0.224)    | 0 (0.000) |    22.91 | anarkez, CacaNito, joel, Lekr0, pr1metapz |
|            7 |      218 | 2024-07-25 | SAW               | L   | 1.000      | -            | -                | -                | -         |    -1.88 | anarkez, CacaNito, joel, Lekr0, pr1metapz |
|            6 |      242 | 2024-07-24 | 1WIN              | L   | 1.000      | -            | -                | -                | -         |    -5.96 | anarkez, CacaNito, joel, Lekr0, pr1metapz |
|            5 |      287 | 2024-07-23 | GUN5              | W   | 1.000      | 0.435        | 0.074 (0.032)    | 0.516 (0.224)    | 0 (0.000) |    24.70 | anarkez, CacaNito, joel, Lekr0, pr1metapz |
|            4 |      317 | 2024-07-22 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |    -2.51 | anarkez, CacaNito, joel, Lekr0, pr1metapz |
|            3 |      362 | 2024-07-20 | Aurora Young Blud | L   | 1.000      | -            | -                | -                | -         |    -7.06 | anarkez, CacaNito, joel, Lekr0, pr1metapz |
|            2 |      465 | 2024-07-18 | Metizport         | W   | 1.000      | 0.435        | 0.039 (0.017)    | 0.427 (0.186)    | 0 (0.000) |    26.53 | anarkez, CacaNito, joel, Lekr0, pr1metapz |
|            1 |      594 | 2024-07-16 | SINNERS           | W   | 1.000      | 0.435        | 0.038 (0.017)    | 0.721 (0.313)    | 0 (0.000) |    26.61 | anarkez, CacaNito, joel, Lekr0, pr1metapz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
