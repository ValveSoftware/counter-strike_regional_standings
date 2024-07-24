### Roster Details<br />
Team Name: FlyQuest RED<br />
Roster: BiBiAhn, Emy, GooseBreeder, Shakezullah, vanessa<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [135](../standings_global.md)<br />
Regional Rank: [36]( ../standings_americas.md)<br />
Final Rank Value:  766.8<br />
<br />
Final Rank Value (766.8) = Starting Rank Value (732.6) + Head To Head Adjustments (34.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.378[<sup>1</sup>](#table2)
- Bounty Collected: 0.265[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.164<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 732.6
- 400 + ( ( 0.164 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 732.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |      995 | 2024-06-06 | Elevate          | L   | 0.881      | -            | -                | -                | -         |    -5.45 | BiBiAhn, Emy, GooseBreeder, Shakezullah, vanessa |
|           16 |     1202 | 2024-06-01 | HSG fe           | L   | 0.847      | -            | -                | -                | -         |   -10.46 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|           15 |     1239 | 2024-05-31 | BIG EQUIPA       | L   | 0.840      | -            | -                | -                | -         |   -12.74 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|           14 |     1344 | 2024-05-26 | TSM Shimmer      | W   | 0.808      | 0.303        | 0.023 (0.006)    | 0.199 (0.049)    | 0 (0.000) |    11.28 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|           13 |     1348 | 2024-05-26 | Lotus fe         | W   | 0.807      | 0.303        | 0.006 (0.001)    | 0.041 (0.010)    | 0 (0.000) |     8.14 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|           12 |     2299 | 2024-04-19 | Nouns fe         | W   | 0.562      | 0.322        | 0.003 (0.000)    | -                | 0 (0.000) |     3.78 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|           11 |     2476 | 2024-04-14 | TSM Shimmer      | W   | 0.528      | 0.250        | 0.023 (0.003)    | 0.199 (0.026)    | 0 (0.000) |     7.53 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|           10 |     2558 | 2024-04-10 | cleanup crew fe  | W   | 0.502      | 0.322        | 0.002 (0.000)    | 0.028 (0.004)    | 0 (0.000) |     5.04 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            9 |     2746 | 2024-04-04 | COVEN            | W   | 0.462      | -            | -                | -                | 0 (0.000) |     3.05 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            8 |     2895 | 2024-03-28 | WG Bandits       | W   | 0.415      | 0.322        | -                | 0.028 (0.004)    | 0 (0.000) |     4.20 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            7 |     3044 | 2024-03-20 | Limitless Angels | W   | 0.362      | 0.322        | 0.003 (0.000)    | 0.062 (0.007)    | 0 (0.000) |     4.29 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            6 |     3190 | 2024-03-13 | Karma            | W   | 0.315      | 0.322        | 0.005 (0.000)    | 0.090 (0.009)    | 0 (0.000) |     3.86 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            5 |     3365 | 2024-03-06 | TSM Shimmer      | W   | 0.269      | 0.322        | 0.023 (0.002)    | 0.199 (0.017)    | 0 (0.000) |     3.86 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            4 |     3453 | 2024-03-03 | TSM Shimmer      | W   | 0.248      | 0.250        | 0.023 (0.001)    | 0.199 (0.012)    | -         |     3.64 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            3 |     3595 | 2024-02-25 | TSM Shimmer      | W   | 0.202      | 0.250        | 0.023 (0.001)    | 0.199 (0.010)    | -         |     3.01 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            2 |     4010 | 2024-02-04 | TSM Shimmer      | W   | 0.062      | -            | -                | -                | -         |     0.93 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            1 |     4165 | 2024-01-28 | TSM Shimmer      | W   | 0.015      | -            | -                | -                | -         |     0.23 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,227.77)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      0.854 | $4,000.00      | $3,417.47       |
| 2024-05-26 |      0.808 | $2,500.00      | $2,019.21       |
| 2024-04-14 |      0.528 | $750.00        | $396.18         |
| 2024-03-03 |      0.248 | $750.00        | $186.23         |
| 2024-02-25 |      0.202 | $750.00        | $151.22         |
| 2024-02-04 |      0.062 | $750.00        | $46.23          |
| 2024-01-28 |      0.015 | $750.00        | $11.22          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
