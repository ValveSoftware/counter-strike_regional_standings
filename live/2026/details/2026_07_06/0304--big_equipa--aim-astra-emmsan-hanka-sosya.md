### Roster Details<br />
Team Name: BIG EQUIPA<br />
Roster: aiM, ASTRA, Emmsan, Hanka, sosya<br />
Global Rank: [304](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_06.md)<br />
Regional Rank: [193]( ../../standings_europe_2026_07_06.md)<br />
<br />
Final Rank Value:  572.3<br />
<br />
Final Rank Value (572.3) = Starting Rank Value (601.8) + Head To Head Adjustments (-29.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.248[<sup>1</sup>](#table2)
- Bounty Collected: 0.180[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.107<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 601.8
- 400 + ( ( 0.107 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 601.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |     2839 | 2026-04-01 | Grindas            | L   | 0.560      | -            | -                | -                | -         |   -10.74 | aiM, ASTRA, Emmsan, Hanka, sosya  |
|           15 |     2932 | 2026-03-31 | EXSAD              | W   | 0.553      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.59 | aiM, ASTRA, Emmsan, sosya, wieenN |
|           14 |     2992 | 2026-03-30 | The Last Resort    | L   | 0.547      | -            | -                | -                | -         |    -2.64 | aiM, ASTRA, Emmsan, sosya, wieenN |
|           13 |     3535 | 2026-03-21 | Leo                | L   | 0.488      | -            | -                | -                | -         |    -3.89 | aiM, ASTRA, Emmsan, Hanka, sosya  |
|           12 |     3619 | 2026-03-20 | Ursa               | L   | 0.479      | -            | -                | -                | -         |    -2.09 | aiM, ASTRA, Emmsan, Hanka, sosya  |
|           11 |     3747 | 2026-03-17 | Persona Grata      | L   | 0.459      | -            | -                | -                | -         |    -7.04 | aiM, ASTRA, Emmsan, Hanka, sosya  |
|           10 |     4529 | 2026-03-01 | PsychoFace         | L   | 0.353      | -            | -                | -                | -         |    -1.15 | aiM, ASTRA, Emmsan, Hanka, sosya  |
|            9 |     4684 | 2026-02-26 | Fuzos              | L   | 0.333      | -            | -                | -                | -         |    -3.79 | aiM, ASTRA, Emmsan, Hanka, sosya  |
|            8 |     5288 | 2026-02-14 | Let Her Cook       | L   | 0.255      | -            | -                | -                | -         |    -3.86 | aiM, ASTRA, Emmsan, Hanka, sosya  |
|            7 |     5313 | 2026-02-14 | Clutchain fe       | L   | 0.254      | -            | -                | -                | -         |    -2.75 | aiM, ASTRA, Emmsan, Hanka, sosya  |
|            6 |     5352 | 2026-02-13 | Fingers Crossed fe | W   | 0.249      | 0.384        | 0.000 (0.000)    | 0.018 (0.002)    | 0 (0.000) |     3.73 | aiM, ASTRA, Emmsan, Hanka, sosya  |
|            5 |     5427 | 2026-02-12 | Hashiras           | L   | 0.239      | -            | -                | -                | -         |    -2.39 | aiM, ASTRA, Emmsan, Hanka, sosya  |
|            4 |     5443 | 2026-02-11 | Let Her Cook       | W   | 0.235      | 0.384        | 0.002 (0.000)    | 0.028 (0.002)    | 0 (0.000) |     3.85 | aiM, ASTRA, Emmsan, Hanka, sosya  |
|            3 |     5489 | 2026-02-10 | confidence         | W   | 0.228      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.64 | aiM, ASTRA, Emmsan, Hanka, sosya  |
|            2 |     5503 | 2026-02-10 | Nexus              | L   | 0.226      | -            | -                | -                | -         |    -2.90 | aiM, ASTRA, Emmsan, Hanka, sosya  |
|            1 |     5515 | 2026-02-09 | los kogutos        | L   | 0.221      | -            | -                | -                | -         |    -0.98 | aiM, ASTRA, Emmsan, Hanka, sosya  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($522.04)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-15 |      0.261 | $2,000.00      | $522.04         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
